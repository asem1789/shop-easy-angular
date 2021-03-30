import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineHorizontalComponent } from './line-horizontal.component';

describe('LineHorizontalComponent', () => {
  let component: LineHorizontalComponent;
  let fixture: ComponentFixture<LineHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
