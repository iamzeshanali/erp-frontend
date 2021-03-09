import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxClassComponent } from './tax-class.component';

describe('TaxClassComponent', () => {
  let component: TaxClassComponent;
  let fixture: ComponentFixture<TaxClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
