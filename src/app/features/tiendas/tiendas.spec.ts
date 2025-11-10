import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tiendas } from './tiendas';

describe('Tiendas', () => {
  let component: Tiendas;
  let fixture: ComponentFixture<Tiendas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tiendas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tiendas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
