import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente, Modified } from '../interfaces';
import { ClientiService } from './../_services/clienti.service';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() id: number;
  cliente: Cliente;
  faCheck = faCheck;
  faTimes = faTimes;
  keysNoCheck = [{
    label: "Nome",
    path: "nome"
  },
  {
    label: "Nag",
    path: "nag"
  },
  {
    label: "Data di Nascita",
    path: "dataNascita"
  }]

  keysCheck = [
    {
      label: "P1",
      path: "p1"
    },
    {
      label: "P2",
      path: "p2"
    },
    {
      label: "P3",
      path: "p3"
    },
    {
      label: "P4",
      path: "p4"
    },
    {
      label: "P5",
      path: "p5"
    },
    {
      label: "P6",
      path: "p6"
    },
    {
      label: "P7",
      path: "p7"
    },
    {
      label: "Firma",
      path: "firma"
    },
    {
      label: "Telefono",
      path: "telefono",
      icon: false
    },
    {
      label: "Email",
      path: "email",
      icon: false
    }
  ]

  item: Modified;
  conferma = false;

  constructor(public activeModal: NgbActiveModal, private serv: ClientiService, private router: Router) { }

  ngOnInit() {
    this.cliente = this.serv.getCliente(this.id) as Cliente;
    this.inizializza();
  }

//Metodo per chiudere la Modale.
close() {
    this.activeModal.dismiss();
    this.router.navigate([{outlets: {modal: null}}]);
  }

//Metodo per inizializzare i campi della modale.
inizializza() {
  const i = {};
  i['id'] = this.id;
  this.keysCheck.map(el => {
    i[el.path] = false;
  })
  this.item = i as Modified;
}

//Metodo per confermare il cliente.
invia() {
  this.serv.postClientiModified(this.item).subscribe(response => {});
  this.cliente.confermato = true;
}

//Metodo per assicurare la conferma dell'invio.
controllo() {
  if(this.conferma === false) {
    this.conferma = true;
    return;
  } else {
    this.invia();
    this.conferma = false;
  }
}

}
