import { Injectable, Output } from '@angular/core'
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/retry'

import { AppConfig } from '../app.config'
import { Atestado } from '../model/atestado.model'

@Injectable()
export class AtestadoService{

    constructor(){ }

    // emitirAtestado(atestado: Atestado): void{
    //     this.atestadoInformado.emit(atestado)
    // }

    // recuperarAtestado(): Atestado
    // {
    //     let atestadoRecuperado: Atestado;
    //     this.atestadoInformado.subscribe(
    //         atestado => atestadoRecuperado = atestado
    //     )
    //     return atestadoRecuperado;
    // }

    postValidarAtestado(atestado: Atestado): boolean{
        return true;
    }

    postValidarCid(codigoCID: string): boolean{
        return true;
    }
    
}