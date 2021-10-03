import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  @Input() valoresTransferencia:any[];

  valuesTrans:Transferencia[];

  constructor(private service:TransferenciaService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((transferencia:Transferencia[]) => {
      this.valuesTrans = transferencia;
    })
  }



}
