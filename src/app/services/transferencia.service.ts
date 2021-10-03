import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  url:string = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }
}
