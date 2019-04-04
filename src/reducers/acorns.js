const initState = {
  amount: 0
}

const acorns = (state = initState, action) => {
  if (action.type === 'INCREASE_ACORN' || action.type === 'DECREASE_ACORN'){
    let newAmount = action.amount;
    return {
      ...state,
      amount: newAmount
    }
  }
  return state;
}


export default acorns