import { CdkStep, CdkStepper } from '@angular/cdk/stepper';
import {
  Component, QueryList,
} from '@angular/core';
import { SedsStepComponent } from '../seds-step/seds-step.component';

@Component({
  selector: 'app-seds-stepper',
  templateUrl: './seds-stepper.component.html',
  styleUrls: ['./seds-stepper.component.scss'],
  providers: [
    { provide: CdkStepper, useExisting: SedsStepperComponent },
  ]
})
export class SedsStepperComponent extends CdkStepper {
  override readonly steps: QueryList<SedsStepComponent> = new QueryList<SedsStepComponent>();

  public onClick(i: any) {
    console.log(i);
  }
}
