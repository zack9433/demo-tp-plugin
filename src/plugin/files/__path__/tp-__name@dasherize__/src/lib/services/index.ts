import { Tp<%= classify(name) %>Service } from './tp-<%= dasherize(name) %>.service'; 

export const services: any[] = [Tp<%= classify(name) %>Service];

export * from './tp-<%= dasherize(name) %>.service';
