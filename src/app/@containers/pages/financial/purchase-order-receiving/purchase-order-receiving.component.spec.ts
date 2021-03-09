import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderReceivingComponent } from './purchase-order-receiving.component';

describe('PurchaseOrderReceivingComponent', () => {
  let component: PurchaseOrderReceivingComponent;
  let fixture: ComponentFixture<PurchaseOrderReceivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseOrderReceivingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderReceivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
