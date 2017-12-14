import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router/src/events';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import '../util/rxjs-extentions'

import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Array<Oferta>>
  public ofertas2: Array<Oferta>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .debounceTime(1000)
      .distinctUntilChanged() //para não pesquisar novamente um mesmo termo
      .switchMap((termo: string) =>{
        if (termo.trim() === ''){
          return Observable.of<Array<Oferta>>([])
        }
        return this.ofertasService.pesquisaOfertas(termo)
      })
      .catch((err: any) => {
        console.log(err)
        return Observable.of<Array<Oferta>>([])
      })

    this.ofertas.subscribe((ofertas: Array<Oferta>) => {
      this.ofertas2 = ofertas
    })
  }


  public pesquisa(termoDaBusca: string): void{
    this.subjectPesquisa.next(termoDaBusca)
  }

  public limpaPesquisa():void{
    this.subjectPesquisa.next('')
  }

}
