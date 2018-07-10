import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

/**
 * Generated class for the MusikPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-musik',
  templateUrl: 'musik.html',
})
export class MusikPage {
  btnState: any[] = [];
  constructor(public zone: NgZone,public navCtrl: NavController, public navParams: NavParams, public nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('garuda', 'assets/mp3/garuda.mp3');
    this.nativeAudio.preloadSimple('tanahair', 'assets/mp3/tanahair.mp3');
    this.nativeAudio.preloadSimple('merahputih', 'assets/mp3/merahputih.mp3');
    this.btnState[0] = false;
    this.btnState[1] = false;
    this.btnState[2] = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusikPage');
  }

  playmusik(load){
    this.nativeAudio.play(load);
  }

  stopmusik(load){
    this.nativeAudio.stop(load)
  }

  buttonClick(load,index){
    this.zone.run(() => {
      if(this.btnState[index] == false){
        this.playmusik(load);
        this.btnState[index] == true;
      }else{
        this.stopmusik(load)
        this.btnState[index] == false;
      }
    })
    
  }

  lagu = [
    {
      "title": "Garuda Pancasila",
      "load":"garuda"
    },
    {
      "title": "Tanah Airku",
      "load": "tanahair"
    },
    {
      "title":"Bendera Merah Putih",
      "load": "merahputih"
    }
  ]

}
