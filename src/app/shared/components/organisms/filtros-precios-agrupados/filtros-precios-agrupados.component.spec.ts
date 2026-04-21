import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosPreciosAgrupadosComponent } from './filtros-precios-agrupados.component';

describe('FiltrosPreciosAgrupadosComponent', () => {
  let component: FiltrosPreciosAgrupadosComponent;
  let fixture: ComponentFixture<FiltrosPreciosAgrupadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrosPreciosAgrupadosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltrosPreciosAgrupadosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
