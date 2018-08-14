import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { <%= classify(name) %>State, Load } from '../../store';
import { select<%= classify(name) %>Data } from '../../store/tp-<%= dasherize(name) %>.selectors';

const selector = 'tp-<%= dasherize(name) %>';

@Component({
  selector,
  templateUrl: 'tp-<%= dasherize(name) %>.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tp<%= classify(name) %>Component implements OnInit {
  data$: Observable<any>;
  windowId: string = selector;

  constructor(private store: Store<<%= classify(name) %>State>) {}

  ngOnInit() {
    this.data$ = this.store.pipe(select(select<%= classify(name) %>Data));
    this.fetch();
  }

  fetch() {
    this.store.dispatch(new Load(this.windowId));
  }
}
