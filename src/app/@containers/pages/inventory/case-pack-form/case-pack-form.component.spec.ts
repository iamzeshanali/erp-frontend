import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasePackFormComponent } from './case-pack-form.component';

describe('CasePackFormComponent', () => {
  let component: CasePackFormComponent;
  let fixture: ComponentFixture<CasePackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasePackFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasePackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
