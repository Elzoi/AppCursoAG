import { Oferta } from './shared/oferta.model'
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'
@Injectable()
export class OfertasService{

    constructor(private http: Http){}

    public getOfertas(): Promise<Array<Oferta>> {
        return this.http.get("http://localhost:3000/ofertas?destaque=true   ")
            .toPromise()
            .then((resposta: any) => resposta.json() )
        
    }

    // public getOfertas2(): Promise<Array<Oferta>>{
    //     return new Promise((resolve, reject) => {
    //         //console.log("passou")
    //         let deu_certo = true
    //         if (deu_certo)
    //             setTimeout(() => {resolve( this.ofertas ) }, 3000); 
    //         else
    //             reject( {codigo_erro:404, mensagem_erro:"Servidor não encontradsadfo"} )
    //     })
    // }
}

