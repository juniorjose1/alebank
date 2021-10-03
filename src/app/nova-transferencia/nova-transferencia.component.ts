import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();

  constructor() { }

  conta:any;
  valor:any;

  ngOnInit(): void {
  }

  transferir(){
    const transferencia = {
      conta:this.conta,
      valor:this.valor
    }
    this.aoTransferir.emit(transferencia);
  }

}
