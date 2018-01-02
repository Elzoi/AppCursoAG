import { Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {AgendamentoComponent} from './atestado/agendamento/agendamento.component'
import {AtestadoComponent} from './atestado/atestado.component'
import {ResultadoPericiaComponent} from './resultado-pericia/resultado-pericia.component'
import {LoginComponent} from './login/login.component'
import { AuthGuard } from './_guards/auth.guard'

export const ROUTES: Routes = [
    {
        path: '', 
        component: HomeComponent, 
        canActivate: [AuthGuard] 
    },
    {
        path: 'atestado', 
        component: AtestadoComponent, 
        canActivate: [AuthGuard]
    },
    {
        path: 'agendamento', 
        component: AgendamentoComponent, 
        canActivate: [AuthGuard],
        
    },
    {
        path: 'resultadoPericia', 
        component: ResultadoPericiaComponent, 
        canActivate: [AuthGuard]
    },
    {
        path: 'login', 
        component: LoginComponent 
    },
    // otherwise redirect to home
    { 
        path: '**',
        redirectTo: '', 
    }
]

