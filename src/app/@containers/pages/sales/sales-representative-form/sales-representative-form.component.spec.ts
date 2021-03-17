import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRepresentativeFormComponent } from './sales-representative-form.component';

describe('SalesRepresentativeFormComponent', () => {
  let component: SalesRepresentativeFormComponent;
  let fixture: ComponentFixture<SalesRepresentativeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesRepresentativeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesRepresentativeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
