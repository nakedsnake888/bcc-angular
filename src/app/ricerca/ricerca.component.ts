import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { timeout } from 'rxjs/operators';
import { Cliente, Filiale, Modified } from '../interfaces';
import { ClientiService } from './../_services/clienti.service';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent implements OnInit {

  clienti: Array<Cliente> | [];
  page: number;
  pageSize: number;
  
  
  constructor(private serv: ClientiService) { }

  ngOnInit() {
    this.clienti = [];
    this.page = 1;
    this.pageSize = 5;
  }

  //Metodo per la assegnare un Array di clienti.
  getClienti(clienti: Array<Cliente> | []){
    this.clienti = clienti;
}

  

}
