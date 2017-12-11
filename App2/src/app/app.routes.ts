import { Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {RestaurantesComponent} from './restaurantes/restaurantes.component'
import {DiversaoComponent} from './diversao/diversao.component'
import {OfertaComponent} from './oferta/oferta.component'

export const ROUTES: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full' },
    {path: 'restaurantes', component: RestaurantesComponent, pathMatch: 'full' },
    {path: 'diversao', component: DiversaoComponent, pathMatch: 'full'  },
    {path: 'oferta', component: OfertaComponent, pathMatch: 'full' },
    {path: 'oferta/:id', component: OfertaComponent}
]

