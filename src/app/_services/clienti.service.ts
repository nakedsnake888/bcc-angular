import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { AuthService } from './auth.service';
import { Cliente, Modified } from '../interfaces';
import { PaginationService } from './pagination.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {
  url = environment.baseUrl;
  _clienti: Array<Cliente> | [] = [];

  constructor(private http: HttpClient, private auth: AuthService, private pag: PaginationService) { }

  //Metodo per recuperare le filiali
  getFiliali() {
    let url = this.url + "/api/v1/branch-search";

    return this.http.get(url);
  }

  //Metodo per recuperare i Clienti.
  getClienti(nag: string, filiale: string, nome: string, data: NgbDateStruct | null) {
    let url = this.url + "/api/v1/customer-search";
    
    let params = new HttpParams().set("nag", nag).set("branch", filiale);
    if(nome !== "") params = params.append("customerName", nome);
    if(data !== null && data.day !== 0) params = params.set("birthDate", data.month + "/" + data.day + "/" + data.year);
    this.http.get(url, {params: params}).subscribe((clienti) => {
      if(clienti) {
        this._clienti = (clienti as Array<Cliente>).sort((a, b) => a.nome.localeCompare(b.nome));;
      } else {
        this._clienti = [];
      }
    });
  }

  //Metodo per recuperare i clienti.
  get clienti() {
    return this._clienti;
  }

  //Metodo per ottenere i clienti paginati.
  getPaginatedClienti(page:number, pageSize:number) {
    return this.pag.paginate(this.clienti, page, pageSize);
  }

  //Metodo per selezionare il cliente.
  getCliente(id: number) {
    if(this.clienti.length != 0) return this.clienti.find(element => { return element.id === +id});
    return {};
  }

  //Metodo per postare una variazione-cliente.
  postClientiModified(data: Modified) {
    let url = this.url + "/api/v1/customer-mark-as-edited";

    return this.http.post(url, data, {responseType: 'text'});
  }

}
