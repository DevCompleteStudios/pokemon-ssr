import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISimplePokemon } from '../interfaces/ISimplePokemon';
import { map, Observable, tap } from 'rxjs';
import { IPokeApiResponse } from '../interfaces/IPokeApiResponse';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {



  constructor(
    private httpClient:HttpClient,
  ){}

  public loadPage(page:number):Observable<ISimplePokemon[]>{
    if(page !== 0){
      --page;
    }
    page = Math.max(0, page);

    return this.httpClient.get<IPokeApiResponse>(`https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`)
      .pipe(
        map(d => d.results.map(r => (
          {
            id: r.url.split('/').at(-2) ?? '',
            name: r.name,
          }
        ))),

        tap(p => console.log(p)),
      );
}

}
