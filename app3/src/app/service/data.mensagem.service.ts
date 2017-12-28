import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Mensagem } from '../model/mensagem.model';

@Injectable()
export class DataMensagemService {
  
  private messageSource = new BehaviorSubject<Mensagem>(null);
  currentMessage = this.messageSource.asObservable();
  
  constructor() { }
  
  adicionarMensagem(mensagem: Mensagem) {
    this.messageSource.next(mensagem)
  }
}