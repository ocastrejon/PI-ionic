import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarclientePage } from './agregarcliente';

@NgModule({
  declarations: [
    AgregarclientePage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarclientePage),
  ],
})
export class AgregarclientePageModule {}
