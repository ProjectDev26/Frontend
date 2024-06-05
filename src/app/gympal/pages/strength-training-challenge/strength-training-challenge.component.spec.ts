import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthTrainingChallengeComponent } from './strength-training-challenge.component';

describe('StrengthTrainingChallengeComponent', () => {
  let component: StrengthTrainingChallengeComponent;
  let fixture: ComponentFixture<StrengthTrainingChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrengthTrainingChallengeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrengthTrainingChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
