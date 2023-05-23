import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recetario';
  inicio: number = 0;
  banner: number = 0;
  categoria: number = 1;

  swCategoria(){
    if (this.categoria==0){
      this.categoria = 1;
    } else if (this.categoria==1){
      this.categoria = 0;
    }
  }

  swInicio(){
    if (this.inicio==0){
      this.inicio = 1;
    } else if (this.inicio==1){
      this.inicio = 0;
    }
  }

  swBanner(){
    if (this.banner==0){
      this.banner = 1;
    } else if (this.banner==1){
      this.banner = 0;
    }
  }
}
