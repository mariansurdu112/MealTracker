import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMealAddComponent } from './category-meal-add.component';

describe('CategoryMealAddComponent', () => {
  let component: CategoryMealAddComponent;
  let fixture: ComponentFixture<CategoryMealAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryMealAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMealAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
