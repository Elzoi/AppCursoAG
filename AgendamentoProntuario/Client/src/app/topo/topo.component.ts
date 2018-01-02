import { Component, OnInit,Input } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ LoginService ]
})
export class TopoComponent implements OnInit {

  @Input() moduloCorrente: string;

  nomeUsuarioLogado: string = ''
  iconeHome:string = '../assets/ionicons/src/home.svg'

  constructor(
    private loginService:LoginService
  ) { }

  ngOnInit() {
    this.nomeUsuarioLogado = this.loginService.getNameUser()
    
  }

  logout(): void{
    this.loginService.logout()
    location.reload()
  }
}
