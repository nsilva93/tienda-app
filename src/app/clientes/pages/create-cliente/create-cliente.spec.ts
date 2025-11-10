import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCliente } from './create-cliente';

describe('CreateCliente', () => {
  let component: CreateCliente;
  let fixture: ComponentFixture<CreateCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCliente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCliente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
