import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormlyModule } from '@ngx-formly/core';
import { TranslateModule } from '@ngx-translate/core';
import { TpCommonModule } from '@tp-ui/tp-common';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import { <%= camelize(name) %>Reducer, Tp<%= classify(name) %>Effects } from './store';
import { Tp<%= classify(name) %>RoutingModule } from './tp-<%= dasherize(name) %>-routing.module';

@NgModule({
  imports: [
    TranslateModule.forChild(),
    TpCommonModule,
    FormlyModule.forChild(),
    StoreModule.forFeature('<%= camelize(name) %>', <%= camelize(name) %>Reducer),
    EffectsModule.forFeature([Tp<%= classify(name) %>Effects]),
    Tp<%= classify(name) %>RoutingModule
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components]
})
export class Tp<%= classify(name) %>Module {}
