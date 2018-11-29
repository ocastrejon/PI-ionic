import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NegocioProvider } from '../../providers/negocio/negocio'
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AgregarproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregarproducto',
  templateUrl: 'agregarproducto.html',
})
export class AgregarproductoPage {

  mensaje: any;
  public producto = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,  public negocio: NegocioProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarproductoPage');
  }
   
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Producto Agregado',
      subTitle: 'El producto de agregó correctamente',
      buttons: ['OK']
    });
    alert.present();
  }
   
  showAlert2() {
    const alert = this.alertCtrl.create({
      title: 'Producto no Agregado',
      subTitle: 'Los datos del producto estan incompletos',
      buttons: ['OK']
    });
    alert.present();
  }

  AgregarProducto() {
    this.negocio.putProducto(this.producto)
      .subscribe(
        (data) => { // Success
          this.mensaje = data;
          if (this.mensaje.status == "ok") {
            //alert("Producto agregado!!");
            this.showAlert();
          }
          else
            //alert("No se pudo agregar el producto");
            this.showAlert2();
        },
        (error) => {
          //alert("Error al agregar el producto!!");
          //console.error(error);
          this.showAlert2();
        }
      )
  }
}
