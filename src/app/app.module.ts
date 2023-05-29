import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SedsStepperComponent } from './components/seds-stepper/seds-stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { SedsStepComponent } from './components/seds-step/seds-step.component';
import { MatIconModule } from '@angular/material/icon';
import { SedsStepperNextDirective } from './components/seds-stepper/seds-stepper-next.directive';
import { SedsStepperPreviousDirective } from './components/seds-stepper/seds-stepper-previous.directive';

@NgModule({
  declarations: [AppComponent, SedsStepperComponent, SedsStepComponent, SedsStepperNextDirective, SedsStepperPreviousDirective],
  imports: [
    CommonModule,
    CdkStepperModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatStepperModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
