import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarventasPage } from './listarventas';

@NgModule({
  declarations: [
    ListarventasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarventasPage),
  ],
})
export class ListarventasPageModule {}
