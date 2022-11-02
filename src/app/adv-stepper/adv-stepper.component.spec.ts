import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvStepperComponent } from './adv-stepper.component';

describe('AdvStepperComponent', () => {
  let component: AdvStepperComponent;
  let fixture: ComponentFixture<AdvStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
