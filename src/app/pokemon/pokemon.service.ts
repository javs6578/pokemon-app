import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  // Método para obtener todos los Pokémon
  getPokemonList(limit: number = 100): Observable<any> {
    return this.http.get(`${this.baseUrl}?limit=${limit}`);
  }

  // Método para obtener detalles de un Pokémon por nombre
  getPokemonDetails(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`);
  }
}
