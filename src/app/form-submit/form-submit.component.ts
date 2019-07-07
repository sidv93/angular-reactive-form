import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-submit',
  templateUrl: './form-submit.component.html',
  styleUrls: ['./form-submit.component.css']
})
export class FormSubmitComponent implements OnInit {

  public myForm: FormGroup;
  public loading: boolean = false;
  public success: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submitHandler() {
    console.log('in submit');
    this.loading = true;
    
    const formValue = this.myForm.value;

    // Do service call
    setTimeout(() => {
      this.success = true;
    },2000);
  }

}
