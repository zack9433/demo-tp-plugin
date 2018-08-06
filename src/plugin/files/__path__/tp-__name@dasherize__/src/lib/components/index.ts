import { Tp<%= classify(name) %>FormComponent } from './tp-<%= dasherize(name) %>-form/tp-<%= dasherize(name) %>-form.component';
import { Tp<%= classify(name) %>WindowComponent } from './tp-<%= dasherize(name) %>-window/tp-<%= dasherize(name) %>-window.component';

export const components: any[] = [Tp<%= classify(name) %>WindowComponent, Tp<%= classify(name) %>FormComponent];

export * from './tp-<%= dasherize(name) %>-form/tp-<%= dasherize(name) %>-form.component';
export * from './tp-<%= dasherize(name) %>-window/tp-<%= dasherize(name) %>-window.component';
