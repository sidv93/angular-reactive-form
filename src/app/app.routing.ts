import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: '',
            redirectTo: 'basic',
            pathMatch: 'full'
        },
        {
            path: 'basic',
            component: BasicFormComponent
        },
        {
            path: 'nested',
            component: NestedFormComponent
        },
        {
            path: 'array',
            component: FormArrayComponent
        },
        {
            path: 'validation',
            component: FormValidationComponent
        },
        {
            path: 'submit',
            component: FormSubmitComponent
        },
        {
            path: '**',
            redirectTo: 'basic',
            pathMatch: 'full'
        }
    ])
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }