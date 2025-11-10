import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTienda } from './edit-tienda';

describe('EditTienda', () => {
  let component: EditTienda;
  let fixture: ComponentFixture<EditTienda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditTienda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTienda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
