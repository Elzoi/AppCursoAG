import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'
import { Alert } from 'selenium-webdriver';
import { Observable } from 'rxjs/Observable';

import { Atestado } from '../model/atestado.model';
import { AtestadoService } from './atestado.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-atestado',
  templateUrl: './atestado.component.html',
  styleUrls: ['./atestado.component.css'],
})
export class AtestadoComponent implements OnInit {

  @ViewChild('formAtestado') public formulario: NgForm

   public atestadoValido: boolean = false
   private atestado = new Atestado()

  constructor(
    private router: Router,
    private dataService: DataService){ }

  ngOnInit() {
  }

  confirmarAtestado(): void{
    if (this.formulario.valid){
      
      this.atestadoValido = true
      this.dataService.changeData(this.atestado)
      this.router.navigate(['/agendamento'])
    }
    else{
      this.atestadoValido = false
    }
  }

}
