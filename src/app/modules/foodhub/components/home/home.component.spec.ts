import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodHubHome } from './foodhub-home.component';

describe('HomeComponent', () => {
  let component: FoodHubHome;
  let fixture: ComponentFixture<FoodHubHome>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodHubHome]
    });
    fixture = TestBed.createComponent(FoodHubHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
