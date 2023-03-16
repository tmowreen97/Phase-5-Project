const loggedInReducer = (state = true, action) => {
  switch(action.type) {
    case 'LOGIN':
      // debugger
      return true;
      break
    case 'LOGOUT':
      return false;
      break
    default:
      // debugger
      return state;
  }

}

export default loggedInReducer;