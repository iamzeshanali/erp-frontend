import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenItemsComponent } from './open-items.component';

describe('OpenItemsComponent', () => {
  let component: OpenItemsComponent;
  let fixture: ComponentFixture<OpenItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
