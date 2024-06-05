import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsWriteComponent } from './testimonials-write.component';

describe('TestimonialsWriteComponent', () => {
  let component: TestimonialsWriteComponent;
  let fixture: ComponentFixture<TestimonialsWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestimonialsWriteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonialsWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
