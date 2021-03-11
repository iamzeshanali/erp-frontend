import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesInvoiceDetailFormComponent } from './sales-invoice-detail-form.component';

describe('SalesInvoiceDetailFormComponent', () => {
  let component: SalesInvoiceDetailFormComponent;
  let fixture: ComponentFixture<SalesInvoiceDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesInvoiceDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesInvoiceDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
