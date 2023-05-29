import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedsStepComponent } from './seds-step.component';

describe('SedsStepComponent', () => {
  let component: SedsStepComponent;
  let fixture: ComponentFixture<SedsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedsStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SedsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
