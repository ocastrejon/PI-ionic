import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CrearabonoPage } from '../../pages/crearabono/crearabono';
import { DetalleabonoPage } from '../../pages/detalleabono/detalleabono';

@IonicPage()
@Component({
  selector: 'page-listarabonos',
  templateUrl: 'listarabonos.html',
})
export class ListarabonosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {
    alert(JSON.stringify(NavParams.prototype.data))
  }


  EditarAbono(){
    this.navCtrl.push(DetalleabonoPage)
  }
  
  AgregarAbono(){
    this.navCtrl.push(CrearabonoPage)
  }

  mostrarAcciones() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Opciones',
      buttons: [
        {
          text: 'Eliminar',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
            this.mostrarConfirmacion();
          }
        },{
          text: 'Editar',
          icon: 'md-create',
          handler: () => {
            console.log('Archive clicked');
            this.EditarAbono();
          }
        },{
          text: 'Cancelar',
          icon:'md-close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  mostrarConfirmacion() {
    const confirm = this.alertCtrl.create({
      title: 'Va a eliminar el abono!!!!',
      message: '¿Está seguro de que quiere eliminar el abono?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarabonosPage');
  }

}

