import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { categoriaResult } from '../models/receta.models';
import { buscarCategoriaResult } from '../models/buscarPorCategoria.models';
import { detalleResult } from '../models/mostrarDetalle.models';

@Injectable({
  providedIn: 'root'
})
export class InyeccionService {

  constructor(private http: HttpClient) { 

  }

  //prueba 1
  getCategoria(){
    //return this.http.get('https://api.audius.co');
    //return this.http.get<playlistResult>('https://audius-metadata-5.figment.io/v1/playlists/trending?app_name=EXAMPLEAPP');
    return this.http.get<categoriaResult>('https://www.themealdb.com/api/json/v1/1/categories.php');
  }

  getBuscarCategoria(categoria: string){
    return this.http.get<buscarCategoriaResult>('https://www.themealdb.com/api/json/v1/1/filter.php?c='+categoria);
  }

  getMostrarDetalle(codigo: string){
    return this.http.get<detalleResult>('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+codigo);
  }
}
