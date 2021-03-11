import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderReceivingFormComponent } from './purchase-order-receiving-form.component';

describe('PurchaseOrderReceivingFormComponent', () => {
  let component: PurchaseOrderReceivingFormComponent;
  let fixture: ComponentFixture<PurchaseOrderReceivingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseOrderReceivingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderReceivingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
