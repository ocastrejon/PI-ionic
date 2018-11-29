import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AgregarventaPage } from '../../pages/agregarventa/agregarventa';
import { DetalleventaPage } from '../../pages/detalleventa/detalleventa';
import { ModalController } from 'ionic-angular';
import { NegocioProvider } from '../../providers/negocio/negocio'
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-listarventas',
  templateUrl: 'listarventas.html',
})
export class ListarventasPage {

  ventas: any[] = [];
  mensaje: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, public modalCtrl: ModalController, public negocio: NegocioProvider,public toastCtrl: ToastController,     public loadingCtrl: LoadingController) {
    //alert(JSON.stringify(NavParams.prototype.data))
  }

  eliminarVenta(idventa) {
    this.negocio.deleteVenta(idventa)
      .subscribe(
        (data) => {
          this.mensaje = data;
          if (this.mensaje.status == "ok") {
            this.ionViewDidEnter();
            const toast = this.toastCtrl.create({
              message: 'Venta eliminado',
              duration: 3000
            });
            toast.present();
          }
          else {
            const toast = this.toastCtrl.create({
              message: 'No se pudo eliminar la venta',
              duration: 3000
            });
            toast.present();
          }
        },
        (error) => {
          alert("Error al eliminar la venta");
          console.error(error);
        }
      )
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Carga Fallida',
      subTitle: 'No se pudieron obtener las ventas',
      buttons: ['OK']
    });
    alert.present();
  }

  cargarVentas() {
    this.negocio.getVentas()
      .subscribe(
        (data) => {
          this.ventas = data['records'];
        },
        (error) => {
          this.showAlert();
          console.error(error);
        }
      )
  }

  ionViewDidLoad() {
    this.cargarVentas();
  }

  ionViewDidEnter() {
    this.cargarVentas();
  }

  public openModal() {
    this.navCtrl.push(AgregarventaPage);
  }

  public openDetalle(item) {
    const actionSheet = this.actionSheetCtrl.create({
      title: '¿Que quieres hacer?',
      buttons: [
        {
          text: 'Eliminar',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
            let alert = this.alertCtrl.create({
              title: 'Confirmar la eliminación',
              message: '¿Realmente quieres eliminar esta venta?',
              buttons: [
                {
                  text: 'Cancelar',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                  }
                },
                {
                  text: 'Eliminar',
                  handler: () => {
                    console.log('Eliminar clicked');
                    const loader = this.loadingCtrl.create({
                      content: "Eliminando venta...",
                      duration: 3000
                    });
                    loader.present();
                    this.eliminarVenta(item.idventa);
                  }
                }
              ]
            });
            alert.present();
          }
        }, {
          text: 'Editar',
          icon: 'md-create',
          handler: () => {
            this.navCtrl.push(DetalleventaPage, item);
            console.log('Archive clicked');
          }
        }, {
          text: 'Cancelar',
          icon: 'md-close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  

}
