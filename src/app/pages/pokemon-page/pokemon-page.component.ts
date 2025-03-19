import { Component, inject, OnInit, signal } from '@angular/core';
import { IPokemon } from '../../pokemons/interfaces/IPokemon';
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pokemon-page',
  imports: [],
  templateUrl: './pokemon-page.component.html'
})
export default class PokemonPageComponent implements OnInit {

  private pokemonsService = inject(PokemonsService);
  private route = inject(ActivatedRoute);
  public pokemon = signal<IPokemon | null>(null);


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) return;

    this.pokemonsService.loadPokemon(id)
      .subscribe(this.pokemon.set);
  }

}
