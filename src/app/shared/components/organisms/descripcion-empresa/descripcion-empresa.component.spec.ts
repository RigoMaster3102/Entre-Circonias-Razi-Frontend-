import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionEmpresaComponent } from './descripcion-empresa.component';

describe('DescripcionEmpresaComponent', () => {
  let component: DescripcionEmpresaComponent;
  let fixture: ComponentFixture<DescripcionEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescripcionEmpresaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DescripcionEmpresaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
