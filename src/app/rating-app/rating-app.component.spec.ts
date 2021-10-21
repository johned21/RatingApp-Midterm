import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingAppComponent } from './rating-app.component';

describe('RatingAppComponent', () => {
  let component: RatingAppComponent;
  let fixture: ComponentFixture<RatingAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
