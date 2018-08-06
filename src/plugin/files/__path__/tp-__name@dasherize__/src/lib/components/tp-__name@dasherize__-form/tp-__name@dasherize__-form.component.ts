import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'tp-<%= dasherize(name) %>-form',
  templateUrl: 'tp-<%= dasherize(name) %>-form.component.html'
})
export class Tp<%= classify(name) %>FormComponent implements OnChanges {
  @Input() data;
  form = new FormGroup({});
  model: any;
  fields: FormlyFieldConfig[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.model = {
        ...JSON.parse(JSON.stringify(this.data))
      };
    }
  }

  submit(model) {
    console.log(model);
  }
}
