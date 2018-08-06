import { Tp<%= classify(name) %>Component } from './tp-<%= dasherize(name) %>/tp-<%= dasherize(name) %>.component';

export const containers: any[] = [Tp<%= classify(name) %>Component];

export * from './tp-<%= dasherize(name) %>/tp-<%= dasherize(name) %>.component';
