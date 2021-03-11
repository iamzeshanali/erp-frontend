import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxClassFormComponent } from './tax-class-form.component';

describe('TaxClassFormComponent', () => {
  let component: TaxClassFormComponent;
  let fixture: ComponentFixture<TaxClassFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxClassFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxClassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
