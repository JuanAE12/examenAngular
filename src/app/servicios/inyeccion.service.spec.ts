import { TestBed } from '@angular/core/testing';

import { InyeccionService } from './inyeccion.service';

describe('InyeccionService', () => {
  let service: InyeccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InyeccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
