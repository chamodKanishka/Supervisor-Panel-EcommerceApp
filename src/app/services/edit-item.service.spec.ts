import { TestBed, inject } from '@angular/core/testing';

import { EditItemService } from './edit-item.service';

describe('EditItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditItemService]
    });
  });

  it('should ...', inject([EditItemService], (service: EditItemService) => {
    expect(service).toBeTruthy();
  }));
});
