import { TestBed, inject } from '@angular/core/testing';

import { RemoveItemService } from './remove-item.service';

describe('RemoveItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoveItemService]
    });
  });

  it('should ...', inject([RemoveItemService], (service: RemoveItemService) => {
    expect(service).toBeTruthy();
  }));
});
