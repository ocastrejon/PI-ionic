import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AgregarproductoPage } from '../../pages/agregarproducto/agregarproducto';
import { DetalleproductoPage } from '../../pages/detalleproducto/detalleproducto';
import { NegocioProvider } from '../../providers/negocio/negocio'
import { ModalController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-listarproductos',
  templateUrl: 'listarproductos.html',
})
export class ListarproductosPage {

  productos: any[] = [];
  mensaje: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public negocio: NegocioProvider,
    public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
    //alert(JSON.stringify(NavParams.prototype.data))

  }


  eliminarProducto(idproducto) {
    this.negocio.deleteProducto(idproducto)
      .subscribe(
        (data) => { 
          this.mensaje = data;
          if (this.mensaje.status == "ok") {
            this.ionViewDidEnter();
            const toast = this.toastCtrl.create({
              message: 'Producto eliminado',
              duration: 3000
            });
            toast.present();
          }
          else {
            const toast = this.toastCtrl.create({
              message: 'No se pudo eliminar el producto!!',
              duration: 3000
            });
            toast.present();
          }
        },
        (error) => {
          alert("Error al agregar el producto!!");
          console.error(error);
        }
      )
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Carga Fallida',
      subTitle: 'No se pudieron obtener los productos',
      buttons: ['OK']
    });
    alert.present();
  }

  cargarProductos() {
    this.negocio.getProductos()
      .subscribe(
        (data) => { 
          this.productos = data['records'];
        },
        (error) => {
          this.showAlert();
          console.error(error);
        }
      )
  }

  ionViewDidLoad() {
    this.cargarProductos();
  }

  ionViewDidEnter() {
    this.cargarProductos();
  }

  public openModal() {
    this.navCtrl.push(AgregarproductoPage);
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
              message: '¿Realmente quieres eliminar este producto?',
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
                      content: "Eliminando producto...",
                      duration: 3000
                    });
                    loader.present();
                    this.eliminarProducto(item.idproducto);
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
            this.navCtrl.push(DetalleproductoPage, item);
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

