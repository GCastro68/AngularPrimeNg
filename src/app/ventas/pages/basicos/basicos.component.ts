import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'gustavo';
  nombreUpper: string = 'GUSTAVO';
  nombreCompleto: string = 'gUsTavo casTRo';

  fecha: Date = new Date(); // el día de hoy
}
