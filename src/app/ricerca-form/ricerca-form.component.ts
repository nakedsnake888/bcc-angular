import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  FormControl, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Filiale } from '../interfaces';
import { ClientiService } from './../_services/clienti.service';

@Component({
  selector: 'app-ricerca-form',
  templateUrl: './ricerca-form.component.html',
  styleUrls: ['./ricerca-form.component.css']
})
export class RicercaFormComponent implements OnInit {

  filiali: Array<Filiale>;
  form: FormGroup;
  model: NgbDateStruct;

  constructor(private serv: ClientiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.serv.getFiliali().subscribe((filiali) => {
      if(filiali) {
        this.filiali = (filiali as Array<Filiale>);
      } 
    })
  }

  clear() {
    this.form.patchValue({data: {day: 0, month: 0, year: 0}});
    this.form.get('data').setErrors(null);
  }

  //Metodo per creare controllare la logica del Form.
  createForm() {
    this.form =  new FormGroup({
      filiale: new FormControl("-1", [
        Validators.required, Validators.min(0)]),
      nag: new FormControl("", [
        Validators.required, Validators.pattern('[0-9]*')]),
      nomeCliente: new FormControl("", Validators.pattern('[a-zA-Z ]*')),
      data: new FormControl()
   });
   this.form.get('data').valueChanges
   .subscribe(value => {
     if(value !== null && value.day != 0) {
      this.form.get('data').setErrors(null);
      this.form.get('nomeCliente').setValidators([Validators.required, Validators.pattern('[a-zA-Z ]*')]);
      this.form.get('nomeCliente').updateValueAndValidity();
     } else {
      this.form.get('data').setErrors(null);
      this.form.get('nomeCliente').clearValidators();
      this.form.get('nomeCliente').setValidators(Validators.pattern('[a-zA-Z ]*'));
      this.form.get('nomeCliente').updateValueAndValidity();
     }
   });
  }

  //Abilitazione campo Nome Cliente
  checkAvailable() {
    return this.form.get('filiale').valid && this.form.get('nag').valid;
  }

  //Abilitazione campo Data
  checkDate() {
    return this.form.get('filiale').valid && this.form.get('nag').valid && this.form.get('nomeCliente').value != "";
  }

}
