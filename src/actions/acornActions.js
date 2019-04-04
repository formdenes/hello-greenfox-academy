const increaseAcorns = (newAmount) => {
  return {
    type: INCREASE_ACORN,
    amount: newAmount
  }
}

const decreaseAcorns = (newAmount) => {
  return {
    type: DECREASE_ACORN,
    amount: newAmount
  }
}

export {increaseAcorns, decreaseAcorns}