import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFavoritesComponent } from './tab-favorites.component';

describe('TabFavoritesComponent', () => {
  let component: TabFavoritesComponent;
  let fixture: ComponentFixture<TabFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabFavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
