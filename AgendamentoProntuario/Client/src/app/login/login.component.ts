import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../services/alert.service';
import { LoginService } from '../services/login.service'
import { GenericService } from "../services/generic.service";

import { UserSession } from '../model/user-Session.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService, AlertService ]
})
export class LoginComponent implements OnInit {

  private returnUrl: string

  @ViewChild("formLogin")formLogin: NgForm
  
  usuario: User  
  loginSucesso: boolean
        
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.usuario = new User()
      // reset login status
    this.loginService.logout()
  }

  login():void{
    if (this.formLogin.valid)
    {
      this.loginService.login(this.usuario)
      .subscribe(
        data =>{
          this.loginSucesso = true
          
          console.log("Ide sesson: " + data.sessionToken )
          this.router.navigate([''])
          location.reload()
      },
        error =>{
          this.loginSucesso = false
      }
    )
    }
  }

  validarCPF(cpf: string): boolean{
    // let CPF = require("cpf_cnpj").CPF
    // return CPF.isValid(cpf)
    return true
  }
}
