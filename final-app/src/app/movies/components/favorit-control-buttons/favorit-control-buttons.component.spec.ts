import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritControlButtonsComponent } from './favorit-control-buttons.component';

describe('FavoritControlButtonsComponent', () => {
  let component: FavoritControlButtonsComponent;
  let fixture: ComponentFixture<FavoritControlButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritControlButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritControlButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
