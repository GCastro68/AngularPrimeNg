import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Gustavo';
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['Gustavo', 'Maria', 'Pedro', 'Juan', 'Pupi'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos un cliente',
    other: 'tenemos # clientes',
  };

  cambiarCliente() {
    this.nombre = 'María';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.shift();
  }
}
