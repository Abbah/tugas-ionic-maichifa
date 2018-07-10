import { BookPage } from './../book/book';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BookServiceProvider } from '../../providers/book-service/book-service';
import { MusikPage } from '../musik/musik';
import { KameraPage } from '../kamera/kamera';

export class Book {
  label: string;
  file: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public books: any;
  public URLAssets:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public book: BookServiceProvider) {
    this.getBooks()
    this.URLAssets = "http://syifa29.000webhostapp.com/gambar/"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  getBooks(){
    this.book.getBooks()
    .then(data => {
        this.books = data;
    })
  }

  show(book) {
    console.log('show', book);
    this.navCtrl.push(BookPage, {
      book: book
    });
  }

}

@Component({
  template: `
    <ion-tabs>
      <ion-tab tabTitle="Buku" [root]="tab1"></ion-tab>
      <ion-tab tabTitle="Musik" [root]="tab2"></ion-tab>
    </ion-tabs>`
})
export class TabHome {

  tab1: any;
  tab2: any;
  tab3: any;

  constructor() {
    this.tab1 = HomePage;
    this.tab2 = MusikPage;
    this.tab3 = KameraPage;
  }
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class ScanPage {
  isAndroid: boolean = false;
  constructor(public navCtrl: NavController) {
    this.push();
  }


  push() {
    this.navCtrl.push(KameraPage);
  }

}
