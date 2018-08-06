import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tp-<%= dasherize(name) %>-window',
  templateUrl: 'tp-<%= dasherize(name) %>-window.component.html'
})
export class Tp<%= classify(name) %>WindowComponent {
  @Input() windowId: string;
  @Input() windowTitle: string;
  @Input() data: any;
  @Output() refresh = new EventEmitter<any>();

  reload() {
    this.refresh.emit();
  }
}
