import { Component, effect, input } from '@angular/core';
import { ISimplePokemon } from '../interfaces/ISimplePokemon';

@Component({
  selector: 'pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.component.html'
})
export class PokemonCardComponent {

  public pokemon = input.required<ISimplePokemon>();

  // private logEffect = effect(() => {
  //   console.log("Pokemon card = " + this.pokemon());
  // })

}
