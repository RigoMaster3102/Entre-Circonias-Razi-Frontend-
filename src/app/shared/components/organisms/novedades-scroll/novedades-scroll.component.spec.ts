import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadesScrollComponent } from './novedades-scroll.component';

describe('NovedadesScrollComponent', () => {
  let component: NovedadesScrollComponent;
  let fixture: ComponentFixture<NovedadesScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovedadesScrollComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NovedadesScrollComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
