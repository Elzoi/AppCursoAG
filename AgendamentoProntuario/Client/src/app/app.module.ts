import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router/src/directives/router_link';
import { Services } from '@angular/core/src/view';

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ResultadoPericiaComponent } from './resultado-pericia/resultado-pericia.component';

import { AuthGuard } from './_guards/index';
import { AppConfig } from './app.config';
import { SessionService } from './services/session.service';
import { GenericService } from './services/generic.service';
import { DataService } from './services/data.service';
import { AtestadoModule } from './atestado/atestado.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TopoComponent,
    RodapeComponent,
    ResultadoPericiaComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    AtestadoModule
  ],
  providers: [
    AuthGuard,
    AppConfig,
    SessionService,
    GenericService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
