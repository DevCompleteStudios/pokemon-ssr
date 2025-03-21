import { Component, effect, inject, signal } from '@angular/core';
import { PokemonListComponent } from "../../pokemons/pokemon-list/pokemon-list.component";
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { ISimplePokemon } from '../../pokemons/interfaces/ISimplePokemon';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop'
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { PokemonListSkeletonComponent } from "../../pokemons/pokemon-list-skeleton/pokemon-list-skeleton.component";

@Component({
  selector: 'pokemons-page',
  imports: [PokemonListComponent, PokemonListSkeletonComponent, RouterLink],
  templateUrl: './pokemons-page.component.html'
})
export default class PokemonsPageComponent {

  private route = inject(ActivatedRoute);
  private title = inject(Title);
  protected pokemons = signal<ISimplePokemon[]>([]);
  protected pokemonsService = inject(PokemonsService);
  protected currentPage = toSignal<number>(this.route.params.pipe(
    map(res => res["page"] ?? '1'),
    map(page => (isNaN(+page) ? 1 : +page)),
    map(p => Math.max(1, p))
  ));

  protected loadOnPageChange = effect(() => this.loadPokemons(this.currentPage()))

  public loadPokemons(page:number = 0){
    this.pokemonsService.loadPage(page)
      .pipe(
        tap(() => this.title.setTitle("Pokemons SSR - page " + page))
      )
      .subscribe(p => this.pokemons.set(p));
  }

}
