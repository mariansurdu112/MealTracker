import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPhotoPickerComponent } from './meal-photo-picker.component';

describe('MealPhotoPickerComponent', () => {
  let component: MealPhotoPickerComponent;
  let fixture: ComponentFixture<MealPhotoPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealPhotoPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPhotoPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
