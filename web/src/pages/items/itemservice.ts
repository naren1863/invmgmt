import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Item } from '../items/item';

import * as itemJson from '../items/items.json';

@Injectable()
export class ItemService {

    constructor(private http: HttpClient) { }

    getItems()  {
      //return this.http.get('/ui/service/getItems');
      console.log(itemJson);
      return  (itemJson as any).default;
      
    }

    saveItem(item: Item): Observable<Item> {
      console.log(">> Save Items In Service: ", item);
      var theJSON = JSON.stringify(item);
      console.log("-- stringify: ", theJSON);

        return this.http.post<Item>('/ui/service/saveItem', item); 
    }

    deleteItem(item: Item) {
      console.log(">> Delete Items");
      var theJSON = JSON.stringify(item);
      console.log("-- stringify: ", theJSON);
        // var uri = "data:application/json;charset=UTF-8," + encodeURIComponent(theJSON);
        
        // var a = document.createElement('a');
        // a.href = uri;
        // a.innerHTML = "Right-click and choose 'save as...'";
        // console.log("document: " , document);
        // document.body.appendChild(a);
    }
}