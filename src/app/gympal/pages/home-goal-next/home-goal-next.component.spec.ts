import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGoalNextComponent } from './home-goal-next.component';

describe('HomeGoalNextComponent', () => {
  let component: HomeGoalNextComponent;
  let fixture: ComponentFixture<HomeGoalNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeGoalNextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeGoalNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
