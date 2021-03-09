import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferredVendorComponent } from './preferred-vendor.component';

describe('PreferredVendorComponent', () => {
  let component: PreferredVendorComponent;
  let fixture: ComponentFixture<PreferredVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferredVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferredVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
