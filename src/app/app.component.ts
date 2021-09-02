import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'gusTavo caStro';
  valor: number = 1000;
  obj = {
    nombre: 'Gustavo',
  };

  mostrarNombre() {
    console.log(this.nombre);
    console.info(this.valor);
    console.info(this.obj);
  }
}
