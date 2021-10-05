import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  constructor(private service:TransferenciaService, private route:Router) { }

  destino:string | number;
  valor:number;
  data:Date = new Date();
  transferencia:Transferencia;

  ngOnInit(): void {
  }

  transferir(){
    this.transferencia = {
      valor:this.valor,
      destino:this.destino,
      data:this.data
    };

    this.service.post(this.transferencia).subscribe((transferencia:Transferencia) => {
      console.log(transferencia);
      this.zerarValores();
      this.route.navigateByUrl('extrato');
    })
  }

  zerarValores(){
    this.valor = 0;
    this.destino = 0;
  }

}
