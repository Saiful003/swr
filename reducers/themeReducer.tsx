import { ACTIONS } from "../actions/actions";

const initialState = {
  light: true,
};

interface Action {
  type: string;
  payload?: object;
}

function themeReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ACTIONS.SWITCH_THEME: {
      return {
        ...state,
        light: !state.light,
      };
    }
    default: {
      return state;
    }
  }
}

export default themeReducer;
