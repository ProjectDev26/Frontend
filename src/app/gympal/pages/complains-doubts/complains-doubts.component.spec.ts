import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainsDoubtsComponent } from './complains-doubts.component';

describe('ComplainsDoubtsComponent', () => {
  let component: ComplainsDoubtsComponent;
  let fixture: ComponentFixture<ComplainsDoubtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplainsDoubtsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplainsDoubtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
