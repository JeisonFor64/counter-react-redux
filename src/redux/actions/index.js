export const DEPOSIT_MONEY = "DEPOSIT_MONEY";
export const WITHDRAW_MONEY = "WITHDRAW_MONEY";

export const deposit = () => {
  return {
    type: DEPOSIT_MONEY,
    payload: 10,
  };
};

export const withdraw = () => {
  return {
    type: WITHDRAW_MONEY,
    payload: -10,
  };
};
