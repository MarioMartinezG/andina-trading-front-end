import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pais, Ciudad,  RespuestaServicioPais, RespuestaServicioCiudad } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DatosGeograficosService {
  private _URL_API = 'https://countriesnow.space';
  private _BASE_ENDPOINT = '/api/v0.1/countries';
  private _URL_PAISES = `${this._URL_API}${this._BASE_ENDPOINT}/iso`;
  private _URL_CIUDADES = `${this._URL_API}${this._BASE_ENDPOINT}/cities`;

  constructor(private _http: HttpClient) { }

  getPaises(): Observable<Pais[]> {
    return this._http.get<RespuestaServicioPais>(this._URL_PAISES).pipe(
      map(response => {
        // Verificamos si hay un error en la respuesta
        if (!response.error) {
          // Modificamos la estructura de los datos
          return response.data.map(pais => ({
            name: pais.name, // Cambia esto según la estructura de tu API
            code: pais.Iso3    // Agrega otras propiedades si es necesario
          }));
        } else {
          throw new Error(response.msg); // Lanza un error si hay un problema
        }
      })
    );
  }

  getCiudades(ciudad: string): Observable<Ciudad[]> {
    const body = {
      "country": ciudad
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this._http.post<RespuestaServicioCiudad>(this._URL_CIUDADES, body, { headers }).pipe(
      map(response => {
        // Verificamos si hay un error en la respuesta
        if (!response.error) {
          // Modificamos la estructura de los datos
          return response.data.map(ciudad => ({
            name: ciudad, // Cambia esto según la estructura de tu API
            code: ciudad     // Agrega otras propiedades si es necesario
          }));
        } else {
          throw new Error(response.msg); // Lanza un error si hay un problema
        }
      })
    );
  }
}
