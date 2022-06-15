import { DEPOSIT_MONEY, WITHDRAW_MONEY } from "../actions";

const initialState = {
  amount: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT_MONEY:
      return {
        ...state,
        amount: state.amount + 10,
      };

    case WITHDRAW_MONEY:
      return {
        ...state,
        amount: state.amount - 10,
      };

    default:
      return state;
  }
};

export default rootReducer;
