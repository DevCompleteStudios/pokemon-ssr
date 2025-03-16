import { Component, effect, input } from '@angular/core';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";
import { ISimplePokemon } from '../interfaces/ISimplePokemon';

@Component({
  selector: 'pokemon-list',
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent {

  public pokemons = input.required<ISimplePokemon[]>();

}
