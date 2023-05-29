import { CdkStep } from '@angular/cdk/stepper';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seds-step',
  templateUrl: './seds-step.component.html',
  styleUrls: ['./seds-step.component.scss'],
  providers: [
    { provide: CdkStep, useExisting: SedsStepComponent },
  ]
})
export class SedsStepComponent extends CdkStep {
  @Input() icon?: string;
}
