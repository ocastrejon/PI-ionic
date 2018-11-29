import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import {ListarventasPage} from '../pages/listarventas/listarventas';
import {ListarclientesPage} from '../pages/listarclientes/listarclientes';
import {ListarproductosPage} from '../pages/listarproductos/listarproductos';
import {ListarabonosPage} from '../pages/listarabonos/listarabonos';

import { AgregarventaPage } from '../pages/agregarventa/agregarventa';
import { AgregarclientePage } from '../pages/agregarcliente/agregarcliente';
import { AgregarproductoPage } from '../pages/agregarproducto/agregarproducto';
import { CrearabonoPage } from '../pages/crearabono/crearabono';

import { DetalleventaPage } from '../pages/detalleventa/detalleventa';
import { DetalleclientePage } from '../pages/detallecliente/detallecliente';
import { DetalleabonoPage } from '../pages/detalleabono/detalleabono';
import { DetalleproductoPage } from '../pages/detalleproducto/detalleproducto';

import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegistrarPage } from '../pages/registrar/registrar';
import { NegocioProvider } from '../providers/negocio/negocio';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    ListarventasPage,
    ListarclientesPage,
    ListarproductosPage,
    ListarabonosPage,
    DetalleventaPage,
    DetalleclientePage,
    DetalleproductoPage,
    DetalleabonoPage, 
    AgregarventaPage,
    AgregarclientePage,
    AgregarproductoPage,
    CrearabonoPage,
    RegistrarPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListarventasPage,
    ListarclientesPage,
    ListarproductosPage,
    ListarabonosPage,
    DetalleventaPage,
    DetalleclientePage,
    DetalleproductoPage,
    DetalleabonoPage, 
    AgregarventaPage,
    AgregarclientePage,
    AgregarproductoPage,
    CrearabonoPage,
    RegistrarPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NegocioProvider
  ]
})
export class AppModule {}
