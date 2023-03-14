const loggedInReducer = (state = false, action) => {
  switch(action.type) {
    case 'LOGIN':
      // debugger
      return true;
    case 'LOGOUT':
      return !state;
    default:
      return state;
  }

}

export default loggedInReducer;