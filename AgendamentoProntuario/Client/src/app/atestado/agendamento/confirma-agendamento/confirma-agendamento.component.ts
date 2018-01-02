import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'confirma-agendamento',
  templateUrl: './confirma-agendamento.component.html',
  styleUrls: ['./confirma-agendamento.component.css']
})
export class ConfirmaAgendamentoComponent implements OnInit {

  //@Input() id: string

  constructor() { }

  ngOnInit() {
    console.log('confirma agendamento ')
  }

}
