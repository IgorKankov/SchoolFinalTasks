import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteFilmsListComponent } from './favorite-films-list.component';

describe('FavoriteFilmsListComponent', () => {
  let component: FavoriteFilmsListComponent;
  let fixture: ComponentFixture<FavoriteFilmsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteFilmsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteFilmsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
