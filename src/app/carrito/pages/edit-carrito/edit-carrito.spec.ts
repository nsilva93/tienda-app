import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarrito } from './edit-carrito';

describe('EditCarrito', () => {
  let component: EditCarrito;
  let fixture: ComponentFixture<EditCarrito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCarrito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCarrito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
