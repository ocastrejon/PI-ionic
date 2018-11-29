import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NegocioProvider } from '../../providers/negocio/negocio'
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-agregarcliente',
  templateUrl: 'agregarcliente.html',
})
export class AgregarclientePage {

  mensaje: any;
  public cliente = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public negocio: NegocioProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarclientePage');
  }
  
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Cliente Agregado',
      subTitle: 'El cliente de agregó correctamente',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlert2() {
    const alert = this.alertCtrl.create({
      title: 'Cliente no agregado',
      subTitle: 'Los datos del cliente estan incompletos',
      buttons: ['OK']
    });
    alert.present();
  }


  AgregarCliente() {
    this.negocio.putCliente(this.cliente)
      .subscribe(
        (data) => {
          this.mensaje = data;
          if (this.mensaje.status == "ok") {
            //alert("Cliente agregado!!");
            this.showAlert();
          }
          else
            //alert("No se pudo agregar el cliente");
            this.showAlert2();
        },
        (error) => {
          //alert("Error al agregar el cliente!!");
          //console.error(error);
          this.showAlert2();
        }
      )
  }
}
