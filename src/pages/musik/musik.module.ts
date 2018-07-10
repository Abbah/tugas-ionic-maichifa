import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusikPage } from './musik';

@NgModule({
  declarations: [
    MusikPage,
  ],
  imports: [
    IonicPageModule.forChild(MusikPage),
  ],
})
export class MusikPageModule {}
