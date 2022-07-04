import { ACTIONS } from "../actions/actions";

const initialState = {
  isOpenDrawer: false,
};

interface Action {
  type: string;
  payload?: object;
}

function drawerReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ACTIONS.OPEN_DRAWER: {
      return { ...state, isOpenDrawer: true };
    }
    case ACTIONS.CLOSE_DRAWER: {
      return { ...state, isOpenDrawer: false };
    }
    default: {
      return state;
    }
  }
}

export default drawerReducer;
