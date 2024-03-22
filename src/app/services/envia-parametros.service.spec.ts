import { TestBed } from '@angular/core/testing';

import { EnviaParametrosService } from './envia-parametros.service';

describe('EnviaParametrosService', () => {
  let service: EnviaParametrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviaParametrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
