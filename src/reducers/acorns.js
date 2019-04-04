const initState = {
  amount: 0
}

const acorns = (state = initState, action) => {
  if (action.type === 'BUY_ACORN'){
    let newAmount = state.amount+action.amount;
    return {
      ...state,
      amount: newAmount
    }
  }
  else if (action.type === 'EAT_ACORN') {
    let newAmount = Math.max(state.amount-action.amount,0);
    return {
      ...state,
      amount: newAmount
    }
  }
  return state;
}


export default acorns