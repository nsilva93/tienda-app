import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientes } from './list-clientes';

describe('ListClientes', () => {
  let component: ListClientes;
  let fixture: ComponentFixture<ListClientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListClientes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListClientes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
