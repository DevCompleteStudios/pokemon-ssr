import { Component, inject, OnInit, signal } from '@angular/core';
import { IPokemon } from '../../pokemons/interfaces/IPokemon';
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'pokemon-page',
  imports: [],
  templateUrl: './pokemon-page.component.html'
})
export default class PokemonPageComponent implements OnInit {

  private pokemonsService = inject(PokemonsService);
  private route = inject(ActivatedRoute);
  public pokemon = signal<IPokemon | null>(null);
  private title = inject(Title);
  private meta = inject(Meta);


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) return;

    this.pokemonsService.loadPokemon(id)
      .pipe(
        tap(response => this.loadMetatags(response))
      )
      .subscribe(this.pokemon.set);
  }

  public loadMetatags({id, name}:IPokemon){
    const title = `${id} - ${name}`;
    const description:string = `Pagina del pokemon: ${name}`;

    this.title.setTitle(title);
    this.meta.updateTag({name: "description", content: description});
    this.meta.updateTag({name: "og:title", content: title});
    this.meta.updateTag({name: "og:description", content: description});
    this.meta.updateTag({name: "og:image", content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`});
  };

}
