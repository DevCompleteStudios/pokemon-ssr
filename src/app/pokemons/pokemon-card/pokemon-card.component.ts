import { Component, effect, input } from '@angular/core';
import { ISimplePokemon } from '../interfaces/ISimplePokemon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pokemon-card',
  imports: [RouterLink],
  templateUrl: './pokemon-card.component.html'
})
export class PokemonCardComponent {

  public pokemon = input.required<ISimplePokemon>();

}
