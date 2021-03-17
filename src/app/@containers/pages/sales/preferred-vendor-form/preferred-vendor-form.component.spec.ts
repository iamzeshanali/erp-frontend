import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferredVendorFormComponent } from './preferred-vendor-form.component';

describe('PreferredVendorFormComponent', () => {
  let component: PreferredVendorFormComponent;
  let fixture: ComponentFixture<PreferredVendorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferredVendorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferredVendorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
