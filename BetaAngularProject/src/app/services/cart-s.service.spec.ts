import { TestBed } from '@angular/core/testing';

import { CartSService } from './cart-s.service';

describe('CartSService', () => {
  let service: CartSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
