import { Component } from '@angular/core';
import { PokemonListComponent } from "../../pokemons/pokemon-list/pokemon-list.component";

@Component({
  selector: 'pokemons-page',
  imports: [PokemonListComponent],
  templateUrl: './pokemons-page.component.html'
})
export default class PokemonsPageComponent {

}
