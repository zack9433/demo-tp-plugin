import { Tp<%= classify(name) %>Actions, Tp<%= classify(name) %>ActionTypes } from './tp-<%= dasherize(name) %>.actions';

export interface <%= classify(name) %>State {
  data: any;
  loaded: boolean;
  loading: boolean;
}

const initialState: <%= classify(name) %>State = {
  data: {},
  loaded: false,
  loading: false
};

export function <%= camelize(name) %>Reducer(state = initialState, action: Tp<%= classify(name) %>Actions): <%= classify(name) %>State {
  switch (action.type) {
    case Tp<%= classify(name) %>ActionTypes.Load: {
      return {
        ...state,
        loading: true
      };
    }

    case Tp<%= classify(name) %>ActionTypes.LoadFail: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case Tp<%= classify(name) %>ActionTypes.LoadSuccess: {
      return {
        ...state,
        data: action.payload,
        loaded: true,
        loading: false
      };
    }

    default: {
      return state;
    }
  }
}
