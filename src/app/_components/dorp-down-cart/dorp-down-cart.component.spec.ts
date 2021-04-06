import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorpDownCartComponent } from './dorp-down-cart.component';

describe('DorpDownCartComponent', () => {
  let component: DorpDownCartComponent;
  let fixture: ComponentFixture<DorpDownCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DorpDownCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DorpDownCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
