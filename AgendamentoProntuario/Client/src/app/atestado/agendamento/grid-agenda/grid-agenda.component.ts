import { Component, OnInit, Input } from '@angular/core';
import { Agenda } from '../../../model/agenda.model';

@Component({
  selector: 'app-grid-agenda',
  templateUrl: './grid-agenda.component.html',
  styleUrls: ['./grid-agenda.component.css']
})
export class GridAgendaComponent implements OnInit {

  @Input() agendasDisponiveis: Array<Agenda>

  constructor() { }

  ngOnInit() {
  }

  selecionarAgenda(agendaSelecionada:Agenda): void{
    agendaSelecionada.selecionada = true
  }

}
