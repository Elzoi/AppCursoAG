import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { ROUTES } from './app.routes'
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    OrdemCompraComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pt-Br' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
