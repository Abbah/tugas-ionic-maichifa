import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BookServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookServiceProvider {
  public URL:any;
  constructor(public http: HttpClient) {
    console.log('Hello BookServiceProvider Provider');
    this.URL = "http://syifa29.000webhostapp.com/api.php"
  }

  getBooks(){
    return new Promise(resolve => {
      this.http.get(this.URL)
        // .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          alert(JSON.stringify(error.message))
        });
    });
  }

}
