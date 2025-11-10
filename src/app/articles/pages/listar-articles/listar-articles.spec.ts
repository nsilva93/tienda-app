import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListArticlesComponent } from './listar-articles';

describe('ListarArticles', () => {
  let component: ListArticlesComponent;
  let fixture: ComponentFixture<ListArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListArticlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
