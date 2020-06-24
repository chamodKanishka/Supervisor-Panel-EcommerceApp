import { TestBed, inject } from '@angular/core/testing';

import { AddItemService } from './add-item.service';

describe('AddItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddItemService]
    });
  });

  it('should ...', inject([AddItemService], (service: AddItemService) => {
    expect(service).toBeTruthy();
  }));
});
