import { Action } from '@ngrx/store';

export enum Tp<%= classify(name) %>ActionTypes {
  Load = '[<%= capitalize(name) %> Component] Load',
  LoadSuccess = '[<%= capitalize(name) %> API] Load Success',
  LoadFail = '[<%= capitalize(name) %> API] Load Fail'
}

export class Load implements Action {
  readonly type = Tp<%= classify(name) %>ActionTypes.Load;

  constructor(public payload?: string) {}
}

export class LoadSuccess implements Action {
  readonly type = Tp<%= classify(name) %>ActionTypes.LoadSuccess;

  constructor(public payload: any) {}
}

export class LoadFail implements Action {
  readonly type = Tp<%= classify(name) %>ActionTypes.LoadFail;

  constructor(public payload: any) {}
}

export type Tp<%= classify(name) %>Actions = Load | LoadSuccess | LoadFail;
