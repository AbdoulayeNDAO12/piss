import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  Produt=[
    {
      "plu":"01234567895",
      "name":"Gaming DDR5 RAM 16GB",
      "price":76,
      "desc":"Gaming DDR5 RAM 16GB PC-128000 For x64 PC"
    },
    {
      "plu":"01234567898",
      "name":"Intel Core i7 3.3GHz",
      "price":200,
      "desc":"Intel Core i7 3.3GHz L2 16MB 4.6ns"
    }
  ]

  constructor(public http: HttpClient) {
    console.log('Hello DataServiceProvider Provider');
  }
 

}
