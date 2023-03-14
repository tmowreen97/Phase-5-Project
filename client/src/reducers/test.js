const testReducer = (state = false, action) => {
  switch(action.type) {
    case 'test':
      // debugger
      return !state;
    default:
      return state;
  }

}

export default testReducer;