import { ACTIONS } from "../actions/actions";

const initialState = {
  isOpenModal: false,
};

interface Action {
  type: string;
  payload?: object;
}

function modalReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ACTIONS.OPEN_MODAL: {
      return { ...state, isOpenModal: true };
    }
    case ACTIONS.CLOSE_MODAL: {
      return { ...state, isOpenModal: false };
    }
    default: {
      return state;
    }
  }
}

export default modalReducer;
