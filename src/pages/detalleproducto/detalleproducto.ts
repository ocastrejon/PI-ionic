import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NegocioProvider } from '../../providers/negocio/negocio'
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the DetalleproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalleproducto',
  templateUrl: 'detalleproducto.html',
})
export class DetalleproductoPage {

  productox: any;
  mensaje: any;
  public producto = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public negocio: NegocioProvider,  private alertCtrl: AlertController) {
    let data3 = this.navParams.data;
    //alert(JSON.stringify (data3)); //this shows as {}
    this.producto = data3;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleproductoPage');
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Producto Actualizado',
      subTitle: 'Los datos del producto se actualizaron correctamente',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlert2() {
    const alert = this.alertCtrl.create({
      title: 'Producto no Actualizado',
      subTitle: 'No fue posible actualizar los datos del producto',
      buttons: ['OK']
    });
    alert.present();
  }

  ActualizarProducto() {
    this.negocio.updateProducto(this.producto)
      .subscribe(
        (data) => { // Success
          this.mensaje = data;
          if (this.mensaje.status == "ok") {
            //alert("Producto actualizado!!");
            this.showAlert();
            //this.navParams.get("HomePage").someFnToUpdateParent();
            //this.navCtrl.pop();
          }
          else
           // alert("No se pudo actualizar el producto");
           this.showAlert2();
        },
        (error) => {
          //alert("Error al actualizar el producto!!");
          //console.error(error);
          this.showAlert2();
        }
      )
  }
}
