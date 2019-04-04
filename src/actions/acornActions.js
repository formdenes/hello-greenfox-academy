const acornBought = (amount) => {
  return {
    type: 'BUY_ACORN',
    amount: amount
  }
}

const acornEaten = (amount) => {
  return {
    type: 'EAT_ACORN',
    amount: amount
  }
}

export {acornBought, acornEaten}