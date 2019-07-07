import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { AppRoutingModule } from './app.routing';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    NestedFormComponent,
    FormArrayComponent,
    FormValidationComponent,
    FormSubmitComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
