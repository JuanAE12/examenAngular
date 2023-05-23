import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { buscar, buscarCategoriaResult } from 'src/app/models/buscarPorCategoria.models';
import { buscarDetalle, detalleResult } from 'src/app/models/mostrarDetalle.models';
import { categoria, categoriaResult } from 'src/app/models/receta.models';
import { InyeccionService } from 'src/app/servicios/inyeccion.service';

@Component({
  selector: 'componente-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  sw : boolean;
  swComida : boolean;
  swDetalle : boolean;

  cat : categoriaResult;
  listaCategoria : categoria[];

  resCategoria : buscarCategoriaResult;
  resultadoCategoria : buscar[];

  det : detalleResult;
  resultadoDetalle : buscarDetalle[];

  constructor(private inyeccionS: InyeccionService){
    this.cat = new categoriaResult;
    this.listaCategoria = this.cat.categories;

    this.resCategoria = new buscarCategoriaResult;
    this.resultadoCategoria = this.resCategoria.meals;

    this.det = new detalleResult;
    this.resultadoDetalle = this.det.meals;

    this.sw = true;
    this.swComida = false;
    this.swDetalle = false;
  }

  ngOnInit(): void{
    this.verCategoria();
  }

  verCategoria(){
    this.inyeccionS.getCategoria().subscribe(dato => {
      this.listaCategoria = dato.categories;
      //console.log(this.listaAlbum);
    });
  }

  verRecetas(categoria: string){
    this.inyeccionS.getBuscarCategoria(categoria).subscribe(dato => {
      this.resultadoCategoria = dato.meals;
      //console.log(this.resultadoCategoria);
    });
    this.sw = false;
    this.swComida=true;
  }

  verDetalles(codigo: string){
    this.inyeccionS.getMostrarDetalle(codigo).subscribe(dato => {
      this.resultadoDetalle = dato.meals;
      console.log(this.resultadoDetalle);
    });
    this.swComida=false;
    this.swDetalle=true;
  }

  atrasReceta(){
    this.swComida=true;
    this.swDetalle=false;
  }

  atrasCategoria(){
    this.sw = true;
    this.swComida=false;
  }
}
