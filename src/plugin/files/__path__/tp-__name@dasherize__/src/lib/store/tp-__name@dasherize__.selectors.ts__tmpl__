import { createFeatureSelector, createSelector } from '@ngrx/store';
import { <%= classify(name) %>State } from './tp-<%= dasherize(name) %>.reducers';

export const get<%= classify(name) %>Loading = (state: <%= classify(name) %>State) => state.loading;
export const get<%= classify(name) %>Loaded = (state: <%= classify(name) %>State) => state.loaded;

export const select<%= classify(name) %>State = createFeatureSelector<<%= classify(name) %>State>('<%= camelize(name) %>');
export const select<%= classify(name) %>Data = createSelector(select<%= classify(name) %>State, (state: <%= classify(name) %>State) => state.data);
export const select<%= classify(name) %>Loading = createSelector(select<%= classify(name) %>State, get<%= classify(name) %>Loading);
export const select<%= classify(name) %>Loaded = createSelector(select<%= classify(name) %>State, get<%= classify(name) %>Loaded);
