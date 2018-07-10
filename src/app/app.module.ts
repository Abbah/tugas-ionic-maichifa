import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage, TabHome, ScanPage } from '../pages/home/home';
import { BookPage } from '../pages/book/book';
import { TocPage } from '../pages/toc/toc';
import { SettingsPage } from '../pages/settings/settings';
import { BookServiceProvider } from '../providers/book-service/book-service';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { MusikPageModule } from '../pages/musik/musik.module';
import { KameraPageModule } from '../pages/kamera/kamera.module';
import { QRScanner } from '../../node_modules/@ionic-native/qr-scanner';
import { NativeAudio } from '@ionic-native/native-audio';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookPage,
    TocPage,
    SettingsPage,
    TabHome,
    ScanPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MusikPageModule,
    KameraPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookPage,
    TocPage,
    SettingsPage,
    TabHome,
    ScanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    NativeAudio,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BookServiceProvider
  ]
})
export class AppModule {}
