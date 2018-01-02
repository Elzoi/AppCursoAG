import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Mensagem } from '../model/mensagem.model';
import { DataMensagemService } from '../service/data.mensagem.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mensagem: string = ''

  constructor(
    private data: DataService,
    private data2: DataMensagemService
  ) { }

  ngOnInit() {
  }

  enviarMensagem():void{
    this.data.changeMessage(this.mensagem)
  }

  enviarObjMensagem(): void{
    let obj: Mensagem = new Mensagem()
    obj.texto = this.mensagem
    obj.idMensagem = 123
    this.data2.adicionarMensagem(obj)
  }

  alerta():void {
    alert('teste')
    
  }
}
