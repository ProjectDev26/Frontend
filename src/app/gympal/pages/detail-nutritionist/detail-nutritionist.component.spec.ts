import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNutritionistComponent } from './detail-nutritionist.component';

describe('DetailNutritionistComponent', () => {
  let component: DetailNutritionistComponent;
  let fixture: ComponentFixture<DetailNutritionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailNutritionistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailNutritionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
