import { Injectable } from '@angular/core';

import { User } from '../model/user.model'
import { UserSession } from '../model/user-Session.model'

@Injectable()
export class SessionService{
    
    private readonly KEY_STORAGE: string = 'AgendamentoPericiaWeb'

    constructor(){}

    public hasCurrentSession(): boolean{
        return this.getUser() != null
    }

    public getCurrentSession() :UserSession{
        if (this.getUser() != null)
            return this.getUser()
        else
            return null //não seria melhor gerar uma mensagem de erro ?
    }
    
    private getUser(): UserSession {
        let userSession: UserSession;
        userSession = JSON.parse(localStorage.getItem(this.KEY_STORAGE));
        if (userSession != null)
            return userSession;
        else
            return null
    }

    // public getNameUser(): string{
    //     if (this.getUser() != null)
    //         return this.getUser().name
    //     else
    //         return ''
    // }

    public setCurrentSession(userSession: UserSession): void{
        localStorage.removeItem(this.KEY_STORAGE);
        localStorage.setItem(this.KEY_STORAGE, JSON.stringify(userSession))
    }

    public clearSession(): void{
        localStorage.removeItem(this.KEY_STORAGE);
    }
}
