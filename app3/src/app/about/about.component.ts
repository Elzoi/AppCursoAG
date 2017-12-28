import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Mensagem } from '../model/mensagem.model';
import { DataMensagemService } from '../service/data.mensagem.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private mensagem: string = 'ND'
  private objMensagem: Mensagem

  constructor( 
    private data: DataService,
    private data2: DataMensagemService 
  ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(
      message => this.mensagem = message
    )

    this.data2.currentMessage.subscribe(
      m => this.objMensagem = m
    )

  }

}
