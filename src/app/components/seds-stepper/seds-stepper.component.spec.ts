import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedsStepperComponent } from './seds-stepper.component';

describe('SedsStepperComponent', () => {
  let component: SedsStepperComponent;
  let fixture: ComponentFixture<SedsStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedsStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SedsStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
