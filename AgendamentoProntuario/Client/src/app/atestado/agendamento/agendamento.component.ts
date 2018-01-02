import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms'

import { DataService } from '../../services/data.service';
import { AgendamentoService } from './agendamento.service';

import { Atestado } from '../../model/atestado.model'
import { Agendamento } from '../../model/agendamento.model';
import { Agenda } from '../../model/agenda.model';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css'],
})
export class AgendamentoComponent implements OnInit {
  
  @ViewChild('formAgendamento') public formulario: NgForm
  
  private dataInicial = new Date()
  private dataFinal = new Date(0)
  private atestado = new Atestado();
  agendaSelecionada = new Agenda();
  agendasDisponiveis = new Array<Agenda>();
  
  constructor(
    private agendamentoService: AgendamentoService,
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    
    this.dataService.currentData.subscribe(
      (atestadoInformado: Atestado) => {
        this.atestado = atestadoInformado
        this.dataInicial = this.atestado.data
      })
  }

  recuperarAgendasDisponiveis(): void{
    if (this.dataInicial != null || this.dataFinal != null){
      this.agendasDisponiveis = this.agendamentoService.pesquisarAgendas(this.dataInicial, this.dataFinal)
    }else{
      //mensagem datas não inforada
    }
  }
   
  selecionarAgenda(agendaSelecionada: Agenda, checked: boolean): void{
  }

  solicitarAgendamento(): void{
    //this.agendamentoService.solicitarAgendamento(this.agendaSelecionada)
  }

  confirmarAgendamento(): void{
  }
}
