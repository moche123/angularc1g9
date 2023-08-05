import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPokeApi, IPokemon } from '../interfaces/box.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PokemonService {
  private url = 'https://pokeapi.co/api/v2/pokemon';
  constructor( private _http:HttpClient ) { }

  getPokemons():Observable<IPokemon[]>{
    return this._http.get<IPokeApi>(this.url).
    pipe(
      map( info => info.results )
    )
  }

}
