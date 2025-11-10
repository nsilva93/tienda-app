import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTiendas } from './list-tiendas';

describe('ListTiendas', () => {
  let component: ListTiendas;
  let fixture: ComponentFixture<ListTiendas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTiendas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTiendas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
