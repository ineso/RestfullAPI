import { Injectable } from '@angular/core';
import {Http , Response, Headers} from '@angular/http';
//to use the mapping and filtering utility 
import {map, filter, scan } from 'rxjs/operators';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) {   }
  getshoppingItems(){
    //retreive the item list from database 
    return this.http
    .get('http://127.0.0.1:3000/api/items').pipe(
      map(res=> res.json()) );  
  }

  addShoppingItem(newItem) {
    let headers =new Headers();
    headers.append('content-Type', 'application/json');
    return this.http
    .post('http://127.0.0.1:3000/api/item', newItem, {headers:headers}).pipe(
      map(res=>res.json()));
  }  

  deleteShoppingItem(id){
    return this.http.delete('http://localhost:3000/api/item/'+id).pipe(
      map(res=> res.json()));
  }
  updateShoppingItem(newItem) {
    let headers =new Headers();
    headers.append('content-Type', 'application/json');
    return this.http
    .put('http://127.0.0.1:3000/api/item/'+newItem._id, newItem, {headers:headers}).pipe(
      map(res => res.json()));
  }
  
}
