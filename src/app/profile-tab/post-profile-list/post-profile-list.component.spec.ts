import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProfileListComponent } from './post-profile-list.component';

describe('PostProfileListComponent', () => {
  let component: PostProfileListComponent;
  let fixture: ComponentFixture<PostProfileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostProfileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
