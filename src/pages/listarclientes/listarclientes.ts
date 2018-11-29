import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AgregarclientePage } from '../../pages/agregarcliente/agregarcliente';
import { DetalleclientePage } from '../../pages/detallecliente/detallecliente';
import { NegocioProvider } from '../../providers/negocio/negocio'
import { ModalController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-listarclientes',
  templateUrl: 'listarclientes.html',
})
export class ListarclientesPage {

  clientes: any[] = [];
  mensaje: any;

  constructor(public navCtrl: NavController,
    public negocio: NegocioProvider,
    public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public navParams: NavParams) {
    //alert(JSON.stringify(NavParams.prototype.data))
  }
  
  public openModal() {
    this.navCtrl.push(AgregarclientePage);
  }

  ionViewDidLoad() {
    this.cargarClientes();
  }

  ionViewDidEnter() {
    this.cargarClientes();
  }

  eliminarCliente(idcliente) {
    this.negocio.deleteCliente(idcliente)
      .subscribe(
        (data) => {
          this.mensaje = data;
          if (this.mensaje.status == "ok") {
            this.ionViewDidEnter();
            const toast = this.toastCtrl.create({
              message: 'Cliente eliminado',
              duration: 3000
            });
            toast.present();
          }
          else {
            alert(JSON.stringify(data))
            const toast = this.toastCtrl.create({
              message: 'No se pudo eliminar el cliente!!',
              duration: 3000
            });
            toast.present();
          }
        },
        (error) => {
          alert(JSON.stringify(error));
          console.error(error);
        }
      )
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Carga Fallida',
      subTitle: 'No se pudieron obtener los clientes',
      buttons: ['OK']
    });
    alert.present();
  }

  cargarClientes() {
    this.negocio.getClientes()
    .subscribe(
      (data) => {
          this.clientes = data['records'];
        },
        (error) => {
          this.showAlert();
          console.error(error);
        }
      )
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
              message: '¿Realmente quieres eliminar este cliente?',
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
                      content: "Eliminando cliente...",
                      duration: 3000
                    });
                    loader.present();
                    this.eliminarCliente(item.idcliente);
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
            this.navCtrl.push(DetalleclientePage, item);
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

