import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPreciosComponent } from './filtro-precios.component';

describe('FiltroPreciosComponent', () => {
  let component: FiltroPreciosComponent;
  let fixture: ComponentFixture<FiltroPreciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroPreciosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltroPreciosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
