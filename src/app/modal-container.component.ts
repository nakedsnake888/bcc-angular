import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { ModalComponent } from './modal/modal.component';
import { Cliente } from './interfaces';
import { ClientiService } from './_services/clienti.service';

@Component({
  selector: 'app-modal-container',
  template: ``
})
export class ModalContainerComponent implements OnDestroy, OnInit {
  currentModal = null;
  id: number;

  constructor(private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router) {
      
     }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    
    setTimeout(() => this.inizializza(), 0);
    }

  inizializza() {
    this.currentModal = this.modalService.open(ModalComponent, { centered: true });
    this.currentModal.componentInstance.id = this.id;
  }

  ngOnDestroy() { 
    this.router.navigate([{outlets: {modal: null}}]);
  }

}
