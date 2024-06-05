import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsTrainingComponent } from './programs-training.component';

describe('ProgramsTrainingComponent', () => {
  let component: ProgramsTrainingComponent;
  let fixture: ComponentFixture<ProgramsTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramsTrainingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramsTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
