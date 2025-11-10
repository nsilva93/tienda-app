import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCliente } from './edit-cliente';

describe('EditCliente', () => {
  let component: EditCliente;
  let fixture: ComponentFixture<EditCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCliente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCliente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
