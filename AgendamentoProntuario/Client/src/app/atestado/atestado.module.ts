import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Modelos
import { AtestadoComponent } from './atestado.component';
import { Atestado } from '../model/atestado.model';
import { Agendamento } from '../model/agendamento.model';

//Componentes
import { AgendamentoErroComponent } from './agendamento/agendamento-erro/agendamento-erro.component';
import { AgendamentoSucessoComponent } from './agendamento/agendamento-sucesso/agendamento-sucesso.component';
import { ConfirmaAgendamentoComponent } from './agendamento/confirma-agendamento/confirma-agendamento.component';
import { GridAgendaComponent } from './agendamento/grid-agenda/grid-agenda.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';

//Serviços
import { DataService } from '../services/data.service';
import { AgendamentoService } from './agendamento/agendamento.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        AtestadoComponent,
        AgendamentoComponent
    ],
    declarations: [
        AtestadoComponent,
        AgendamentoComponent,
        GridAgendaComponent,
        ConfirmaAgendamentoComponent,
        AgendamentoSucessoComponent,
        AgendamentoErroComponent,
    ],
    providers: [
        DataService,
        AgendamentoService
    ],
})
export class AtestadoModule { }
