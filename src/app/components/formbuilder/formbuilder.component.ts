import { Component} from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
})
export class FormbuilderComponent {
  // form = new FormGroup ({
  //   name: new FormControl(),
  //   contacts: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   }),
  //   topics: new FormArray([]) 
  // });
  //create form with form builder 
form;
  constructor(fb:FormBuilder){
   
this.form = fb.group({
    name: ['', Validators.required],
    contact: fb.group({
      email: [],
      phone: []
    }),
    topics: fb.array([])
  });
  }
}
