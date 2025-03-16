import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonListComponent } from "../../pokemons/pokemon-list/pokemon-list.component";
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { ISimplePokemon } from '../../pokemons/interfaces/ISimplePokemon';
import { ActivatedRoute, Router } from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop'
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { PokemonListSkeletonComponent } from "../../pokemons/pokemon-list-skeleton/pokemon-list-skeleton.component";

@Component({
  selector: 'pokemons-page',
  imports: [PokemonListComponent, PokemonListSkeletonComponent],
  templateUrl: './pokemons-page.component.html'
})
export default class PokemonsPageComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private title = inject(Title);
  protected pokemons = signal<ISimplePokemon[]>([]);
  protected pokemonsService = inject(PokemonsService);
  protected currentPage = toSignal<number>(this.route.queryParamMap.pipe(
    map(res => res.get("page") ?? '1'),
    map(page => (isNaN(+page) ? 1 : +page)),
    map(p => Math.max(1, p))
  ));


  ngOnInit(): void {
    console.log(this.currentPage);
    this.loadPokemons();
  }


  public loadPokemons(page:number = 0){
    const pageLoad = this.currentPage()! + page;

    this.pokemonsService.loadPage(pageLoad)
      .pipe(
        tap(() => this.router.navigate([], {queryParams: {page: pageLoad}})),
        tap(() => this.title.setTitle("Pokemons SSR - page " + pageLoad))
      )
      .subscribe(p => this.pokemons.set(p));
  }

}
