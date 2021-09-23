import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  ngOnInit() {
  this.btnClassIncrement = `btn ${ this.btnClassIncrement }`;
  }

 // tslint:disable-next-line: no-input-rename
 @Input('valor') progreso = 50;
 @Input() btnClassIncrement: string = 'btn-primary';

 // tslint:disable-next-line: no-output-rename
 @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  /*get getPorcentaje() {
    return `${ this.progreso }%`;
  }*/

  cambiarValor( valor: number ) {
    if ( this.progreso >= 100 && valor >= 0 ) {
      this.valorSalida.emit(100);
      this.progreso = 100;
      return;

    }
    if ( this.progreso <= 0 && valor < 0 ) {
      this.valorSalida.emit(0);
      this.progreso = 0;
      return;

    }
    this.progreso = this.progreso + valor;
    this.valorSalida.emit( this.progreso );
  }

  onChange( valor: number ) {
    if ( valor >= 100 ) {
      this.progreso = 100;
    } else if ( valor  <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = valor;
    }
    this.valorSalida.emit( this.progreso );
  }

}
