import { ACTIONS } from "../actions/actions";

const initialState = {
  isOpenModal: false,
  isLoginPage: true,
  currentModal: "",
};

interface Action {
  type: string;
  payload?: object;
}

function modalReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ACTIONS.OPEN_MODAL: {
      return { ...state, isOpenModal: true, currentModal: action.payload };
    }
    case ACTIONS.CLOSE_MODAL: {
      return { ...state, isOpenModal: false };
    }
    case ACTIONS.SWITCHPAGE: {
      return { ...state, isLoginPage: !state.isLoginPage };
    }
    default: {
      return state;
    }
  }
}

export default modalReducer;
