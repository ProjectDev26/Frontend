import { TestBed } from '@angular/core/testing';

import { TestimonialsApiService } from './testimonials-api.service';

describe('TestimonialsApiService', () => {
  let service: TestimonialsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestimonialsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
