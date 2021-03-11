import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderDetailFormComponent } from './purchase-order-detail-form.component';

describe('PurchaseOrderDetailFormComponent', () => {
  let component: PurchaseOrderDetailFormComponent;
  let fixture: ComponentFixture<PurchaseOrderDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseOrderDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
