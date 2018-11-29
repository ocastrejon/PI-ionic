import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NegocioProvider } from '../../providers/negocio/negocio'
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  mensaje: any;
  public registrar = [];


  constructor(public navCtrl: NavController, public navParams: NavParams , public negocio: NegocioProvider, public alertCtrl: AlertController) {
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Registro Exitoso',
      subTitle: 'El usuario se añadió correctamente',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlert2() {
    const alert = this.alertCtrl.create({
      title: 'Registro Fallido',
      subTitle: 'El usuario no se pudo añadir correctamente',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlert3() {
    const alert = this.alertCtrl.create({
      title: 'Registro Incompleto',
      subTitle: 'No se pudo registrar porque faltaron datos',
      buttons: ['OK']
    });
    alert.present();
  }

  Enviar(){
    this.negocio.registerUsuario(this.registrar)
    .subscribe(
      (data) => { 
        this.mensaje = data;
        if (this.mensaje.status == "ok") {
          this.showAlert();
        }
        else
          this.showAlert3();
      },
      (error) => {
        this.showAlert2();
        console.error(error);
      }
    )
  }
}
