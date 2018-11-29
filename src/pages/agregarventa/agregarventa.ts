import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NegocioProvider } from '../../providers/negocio/negocio'
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-agregarventa',
  templateUrl: 'agregarventa.html',
})
export class AgregarventaPage {
  clientes: any[] = [];
  productos: any[] = [];
  venta: any[] = [];
  mensaje: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public negocio: NegocioProvider, 
    private alertCtrl: AlertController) {
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

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Venta agregada exitosamente',
      subTitle: '',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlert2() {
    const alert = this.alertCtrl.create({
      title: 'La venta no se agregó',
      subTitle: 'Existen campos vacíos',
      buttons: ['OK']
    });
    alert.present();
  }

  AgregarVenta() {
    this.negocio.putVenta(this.venta)
      .subscribe(
        (data) => {
          this.mensaje = data;
          if (this.mensaje.status == "ok") {
            //alert("Cliente agregado!!");
            this.showAlert();
            this.navCtrl.pop();
          }
          else
          //alert(JSON.stringify(data));
          this.showAlert2();
        },
        (error) => {
          //alert(JSON.stringify(error));
          this.showAlert2();
          console.error(error);
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
