import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  //Metodo per la paginazione dei dati.
  paginate(collection: Array<any>, page: number, pageSize: number) {
    const temp = [];
    page--;
    for(let i = page * pageSize; i < page * pageSize + pageSize; i++) {
      if(typeof collection[i] != "undefined") temp.push(collection[i]);
    }
    return temp;
  }
}
