import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarrito } from './create-carrito';

describe('CreateCarrito', () => {
  let component: CreateCarrito;
  let fixture: ComponentFixture<CreateCarrito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCarrito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCarrito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
