import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMealComponent } from './category-meal.component';

describe('CategoryMealComponent', () => {
  let component: CategoryMealComponent;
  let fixture: ComponentFixture<CategoryMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
