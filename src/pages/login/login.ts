import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import { NegocioProvider } from '../../providers/negocio/negocio'
import {ListarventasPage } from '../listarventas/listarventas'
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  mensaje: any;
  public login = [];

  constructor(public navCtrl: NavController,public modalCtrl: ModalController ,public navParams: NavParams, public alertCtrl: AlertController, public negocio: NegocioProvider) {
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Ingreso Fallido',
      subTitle: 'El usuario o la contraseña son incorrectas',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlert2() {
    const alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Hubo un problema, por favor intente de nuevo',
      buttons: ['OK']
    });
    alert.present();
  }

  signIn(){
    this.negocio.login(this.login)
      .subscribe(
        (data) => {
          this.mensaje = data;

          if (this.mensaje.status == "ok") {
            this.navCtrl.setRoot(ListarventasPage, this.navParams.data);
            this.navCtrl.first;
            NavParams.prototype.data= parseInt(this.mensaje.records[0].idusuario);
          }
          else
          this.showAlert();
        },
        (error) => {
          this.showAlert2();
          console.error(error);
        }
      )
  }

  signUp(){
    const modal =  this.modalCtrl.create(RegistrarPage);
    modal.present();
   
    
    }
}
