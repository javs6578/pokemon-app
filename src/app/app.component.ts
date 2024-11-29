import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonSearchComponent } from './pokemon/pokemon-search/pokemon-search.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import {PokemonService} from "./pokemon/pokemon.service";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PokemonSearchComponent, PokemonListComponent, MatToolbar],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pokemons: any[] = [];
  filteredPokemons: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokemonService.getPokemonList().subscribe((response) => {
      this.pokemons = response.results;
      this.filteredPokemons = this.pokemons;
    });
  }

  onSearch(query: string) {
    console.log('query', query);

    this.filteredPokemons = this.pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
  }
}
