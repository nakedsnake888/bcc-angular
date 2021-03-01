import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaTableComponent } from './ricerca-table.component';

describe('RicercaTableComponent', () => {
  let component: RicercaTableComponent;
  let fixture: ComponentFixture<RicercaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicercaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicercaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
