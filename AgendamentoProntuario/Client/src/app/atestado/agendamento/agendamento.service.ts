import { Injectable } from '@angular/core';
import { Agenda } from '../../model/agenda.model';

@Injectable()
export class AgendamentoService {

    constructor() { }

    pesquisarAgendas(dataInicial:Date, dataFinal: Date): Array<Agenda>{

        let listaAgendas = new Array<Agenda>()
        
        let a1 = new Agenda()
        a1.id  = 10
        a1.dataDisponivel = new Date(2018, 1, 10)
        a1.hora = '10:00'
        a1.medico = 'Ortopedia'
        a1.selecionada = false
        listaAgendas.push(a1)

        let a2 = new Agenda()
        a2.id  = 10
        a2.dataDisponivel = new Date(2018, 1, 10)
        a2.hora = '10:30'
        a2.medico = 'Ortopedia'
        a2.selecionada = false
        listaAgendas.push(a2)

        let a3 = new Agenda()
        a3.id  = 10
        a3.dataDisponivel = new Date(2018, 1, 12)
        a3.hora = '09:00'
        a3.medico = 'Ortopedia'
        a3.selecionada = false
        listaAgendas.push(a3)

        let a4 = new Agenda()
        a4.id  = 10
        a4.dataDisponivel = new Date(2018, 1, 13)
        a4.hora = '15:00'
        a4.medico = 'Ortopedia'
        a4.selecionada = false
        listaAgendas.push(a4)
        
        return listaAgendas
    }

    solicitarAgendamento( agenda: Agenda ): boolean{
        //
        return true
    }
}