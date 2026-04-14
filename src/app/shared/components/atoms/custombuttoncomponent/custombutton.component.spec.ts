import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustombuttonComponent } from './custombutton.component';

describe('Custombuttoncomponent', () => {
  let component: CustombuttonComponent;
  let fixture: ComponentFixture<CustombuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustombuttonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustombuttonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
