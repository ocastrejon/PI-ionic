import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {ListarventasPage} from '../pages/listarventas/listarventas';
import {ListarclientesPage} from '../pages/listarclientes/listarclientes';
import {ListarproductosPage} from '../pages/listarproductos/listarproductos';
import {ListarabonosPage} from '../pages/listarabonos/listarabonos';
import {LoginPage} from '../pages/login/login'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Ventas', component: ListarventasPage },
      { title: 'Clientes', component: ListarclientesPage },
      { title: 'Productos', component: ListarproductosPage },
      { title: 'Abonos', component: ListarabonosPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);

  }
}
