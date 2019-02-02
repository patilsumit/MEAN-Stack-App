import { TestBed, inject } from '@angular/core/testing';

import { EndPointServiceService } from './end-point-service.service';

describe('EndPointServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EndPointServiceService]
    });
  });

  it('should be created', inject([EndPointServiceService], (service: EndPointServiceService) => {
    expect(service).toBeTruthy();
  }));
});
