import { TestBed } from '@angular/core/testing';

import { MaquiagemService } from './maquiagem.service';

describe('MaquiagemService', () => {
  let service: MaquiagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaquiagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
