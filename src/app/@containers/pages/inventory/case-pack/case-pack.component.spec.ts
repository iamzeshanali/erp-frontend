import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasePackComponent } from './case-pack.component';

describe('CasePackComponent', () => {
  let component: CasePackComponent;
  let fixture: ComponentFixture<CasePackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasePackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasePackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
