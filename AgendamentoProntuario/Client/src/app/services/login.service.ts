import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GenericService } from '../services/generic.service';
import { SessionService } from '../services/session.service';

import { User } from '../model/user.model';
import { UserSession } from '../model/user-Session.model';
import { observeOn } from 'rxjs/operators/observeOn';

@Injectable()
export class LoginService {

  constructor(private generic: GenericService, private session: SessionService) { }

  login(dto: User): Observable<UserSession>
  {
    // let observable = this.generic.post<UserSession>('userSession', dto);
    // observable.subscribe(sessionDto => {
    //   if (sessionDto && sessionDto.sessionToken) {
    //     this.session.setCurrentSession(sessionDto);
    //   }
    // });
    let observable: Observable<UserSession> = new Observable<UserSession>(
      observer =>{
        {
          if (dto.cpf === '06303995659')
          {
            let usuarioSession: UserSession= new UserSession()
            usuarioSession.cpf = '06303995659'
            usuarioSession.id = 1
            usuarioSession.sessionToken = '5a341'
            usuarioSession.nome = "Jose Alves Silva"
            this.session.setCurrentSession(usuarioSession);
            observer.next(usuarioSession)
            observer.complete()
          }
        };
        {
          console.log('login service deu erro')
          observer.error("erro")
        }
      }
    )

    return observable;
  }
  
  logout(): void
  {
    //TODO logout no servidor?
    this.session.clearSession();
  }

  getNameUser(): string{
    if (this.session.hasCurrentSession())
      return this.session.getCurrentSession().nome
    else{
      this.logout()
      return ''
    }
  }
}
