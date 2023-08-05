import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IPokemon, IUser } from 'src/app/interfaces/box.interface';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit,OnDestroy {
  public users: IUser[] = [
    {
      id: 1,
      name:'Carlos',
      email :'carlos@gmail.com',
      age: 20,
    },
    {
      id: 2,
      name:'Luis',
      email :'luis@gmail.com',
      age: 18,
    },
    {
      id: 3,
      name:'Jose',
      email :'jose@gmail.com',
      age: 25,
    },
    {
      id: 4,
      name:'Julian',
      email :'julian@gmail.com',
      age: 9,
    }
  ]

  public pokemons:IPokemon[] = [];
  //public subs$: Subscription = new Subscription;

  public pokemons$: Observable<IPokemon[]> = new Observable;

  constructor( private _pokemonService:PokemonService ){}

  ngOnInit(): void {
    // this.subs$ = this._pokemonService.getPokemons().subscribe(pokemonList => {
    //   this.pokemons = pokemonList
    // })
    this.pokemons$ = this._pokemonService.getPokemons()
  }

  ngOnDestroy(): void {
    //this.subs$.unsubscribe()
  }


}
