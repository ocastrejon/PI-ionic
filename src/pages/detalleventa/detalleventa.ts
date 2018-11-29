import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NegocioProvider } from '../../providers/negocio/negocio'
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the DetalleventaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalleventa',
  templateUrl: 'detalleventa.html',
})
export class DetalleventaPage {

  mensaje: any;
  public venta = [];
  clientes: any[] = [];
  productos: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public negocio: NegocioProvider, private alertCtrl: AlertController) {
    let data3 = this.navParams.data;
    console.log(data3); //this shows as {}
    this.venta = data3
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Venta modificada exitosamente',
      subTitle: '',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlert2() {
    const alert = this.alertCtrl.create({
      title: 'La venta no se modificó',
      subTitle: 'Existen campos vacíos',
      buttons: ['OK']
    });
    alert.present();
  }

  cargarClientes() {
    this.negocio.getClientes()
      .subscribe(
        (data) => {
          this.clientes = data['records'];
          //alert(JSON.stringify(this.clientes))
        },
        (error) => {
          //this.showAlert();
          console.error(error);
        }
      )
  }

  cargarProductos() {
    this.negocio.getProductos()
      .subscribe(
        (data) => {
          this.productos = data['records'];
         // alert(JSON.stringify(this.productos))
        },
        (error) => {
          //this.showAlert();
          console.error(error);
        }
      )
  }

  ActualizarCliente() {
    this.negocio.updateVenta(this.venta)
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
            //alert(JSON.stringify(data));
            this.showAlert2();
        },
        (error) => {
          //alert(JSON.stringify(error));
          //console.error(error);
          this.showAlert2();
        }
      )
  }

  ionViewDidLoad() {
    this.cargarClientes();
    this.cargarProductos();
  }

  ionViewDidEnter() {
    this.cargarClientes();
    this.cargarProductos();
  }
}
