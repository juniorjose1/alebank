import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alebank';
  listaTransferencias:any[] = [];

  transferir($event){
    this.listaTransferencias.push(this.valoresComData($event));
  }

  valoresComData($event){
    const transfComData = {
      ...$event,
      data: new Date()
    }
    return transfComData;
  }

}
