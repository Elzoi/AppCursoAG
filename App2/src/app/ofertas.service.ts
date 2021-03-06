import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/retry'

import { URL_API } from './app.api'
import { Oferta } from './shared/oferta.model'

@Injectable()
export class OfertasService{    

    constructor(private http: Http, private http2: HttpClient){}
    
    public getOfertas(): Promise<Array<Oferta>> {
        return this.http.get(`${URL_API}?destaque=true`)
            .toPromise()
            .then((resposta: Response) => resposta.json() )        
    }

    public getOfertas2(): Observable<Array<Oferta>>{
        return this.http2.get<Array<Oferta>>(`${URL_API}`)
    }

    public getOfertasPorCategoria(categoria: string): Promise<Array<Oferta>>{
        return this.http.get(`${URL_API}?categoria=${categoria}`)
            .toPromise()
            .then((resposta: Response) => resposta.json() )
    }

    public getOfertasPorCategoria2(categoria: string): Observable<Oferta[]>{
        return this.http2.get<Oferta[]>(`${URL_API}?categoria=${categoria}`)
    }

    public getOfertasPorId(id: number): Promise<Oferta>{
        return this.http.get(`${URL_API}?id=${id}`)
            .toPromise()
            .then((resposta: Response) => {
                return resposta.json()[0] 
            })
    }

    public pesquisaOfertas(termo: string): Observable<Array<Oferta>>{
        return this.http.get(`${URL_API}?descricao_oferta_like=${termo}`)
            .retry(10)
            .map((resposta: Response) => {
                return resposta.json()
            })
    }
}

