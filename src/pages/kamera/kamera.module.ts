import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KameraPage } from './kamera';

@NgModule({
  declarations: [
    KameraPage,
  ],
  imports: [
    IonicPageModule.forChild(KameraPage),
  ],
})
export class KameraPageModule {}
