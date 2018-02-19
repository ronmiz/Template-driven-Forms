import { Component} from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {


  log(value){
    // this is only toshow the form-controll
    console.log(value);
  }
  contactMethods = [
    { id:1, name:'Email'},
    { id:2, name:'Phone'}
  ]


  submit(f){
    console.log(f.value);
  }

}
