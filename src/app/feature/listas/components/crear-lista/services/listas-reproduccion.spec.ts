import { TestBed } from '@angular/core/testing';

import { ListasReproduccion } from './listas-reproduccion.service';

describe('ListasReproduccion', () => {
  let service: ListasReproduccion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListasReproduccion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
