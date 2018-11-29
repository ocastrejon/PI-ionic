import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NegocioProvider } from '../../providers/negocio/negocio'
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the DetalleclientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detallecliente',
  templateUrl: 'detallecliente.html',
})
export class DetalleclientePage {

  clientex: any;
  mensaje: any;
  public cliente = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public negocio: NegocioProvider,  private alertCtrl: AlertController) {
    let data3 = this.navParams.data;
    console.log(data3); //this shows as {}
    this.cliente = data3;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleclientePage');
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Cliente Actualizado',
      subTitle: 'Los datos del cliente se actualizaron correctamente',
      buttons: ['OK']
    });
    alert.present();
  }
//hola
  showAlert2() {
    const alert = this.alertCtrl.create({
      title: 'Cliente no Actualizado',
      subTitle: 'No fue posible actualizar los datos del cliente',
      buttons: ['OK']
    });
    alert.present();
  }


  ActualizarCliente() {
    this.negocio.updateCliente(this.cliente)
      .subscribe(
        (data) => { // Success
          this.mensaje = data;
          if (this.mensaje.status == "ok") {
            //alert("Cliente actualizado!!");
            this.showAlert();
            //this.navParams.get("HomePage").someFnToUpdateParent();
            this.navCtrl.pop();
          }
          else
            //alert("No se pudo actualizar el cliente");
            this.showAlert2();
        },
        (error) => {
          //alert("Error al actualizar el cliente!!");
          //console.error(error);
          this.showAlert2();
        }
      )
  }
}
