import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'pokemon-app',
  templateUrl: './app/app.component.html'
})

export class AppComponent implements OnInit  {

  pokemons: Pokemon[] = null;
  private title: string = "Pokemons";

  ngOnInit(){
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon){
    alert('Tu as cliqué sur: ' + pokemon.name);
  }

}
