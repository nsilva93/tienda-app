import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTienda } from './create-tienda';

describe('CreateTienda', () => {
  let component: CreateTienda;
  let fixture: ComponentFixture<CreateTienda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTienda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTienda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
