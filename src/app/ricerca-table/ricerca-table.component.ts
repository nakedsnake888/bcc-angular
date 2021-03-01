import { Component, Input, OnInit } from '@angular/core';
import { ClientiService } from './../_services/clienti.service';
import { faSearchPlus, faUserEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ricerca-table',
  templateUrl: './ricerca-table.component.html',
  styleUrls: ['./ricerca-table.component.css']
})
export class RicercaTableComponent implements OnInit {

  @Input() page: number;
  @Input() pageSize: number;
  faSearchPlus = faSearchPlus;
  faCaretSquareDown = faUserEdit;
  
  constructor(private serv: ClientiService) { }

  ngOnInit() {
    
  }

}
