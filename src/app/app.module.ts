import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './forms-testing/login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CounterPropertyBindingComponent } from './02-integration-testing/counter-property-binding/counter-property-binding.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CounterPropertyBindingComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
