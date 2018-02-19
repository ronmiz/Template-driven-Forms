import { Component} from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'formarray',
  templateUrl: './formarray.component.html',
})
export class FormarrayComponent {
  form = new FormGroup ({
    topics: new FormArray([]) 
  });
  addTopic(topic:HTMLInputElement){
   //(this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    this.topics.push(new FormControl(topic.value))
    topic.value = '';
  }
  get topics(){
    return (this.form.get('topics') as FormArray)
  }
  removeTopic(topic: FormControl){
      let index = this.topics.controls.indexOf(topic);
      this.topics.removeAt(index);
    }
}
