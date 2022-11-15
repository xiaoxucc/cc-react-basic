const defaultState = {
  num: 1,
}

const reducerObj = (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))

  
  // if (action.type === 'addNum') {
  //   newState.num += action.value
  // }

  switch (action.type) {
    case 'addNum':
      newState.num += action.value
      break;
  
    default:
      break;
  }

  return newState
}

export default reducerObj