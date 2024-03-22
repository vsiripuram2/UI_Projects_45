const initialState = {
    balance: 0,
    fullName: "",
    mobile: null,
    name: ""
  };

  function acountReducer(state = initialState, action) {
    switch (action.type) {
      case "deposit":
        return { ...state, balance: state.balance + +action.payload };
      case "withdraw":
        return { ...state, balance: state.balance - +action.payload };
      case "mobileUpdate":
        return { ...state, mobile: action.payload };
      case "nameUpdate":
        return { ...state, fullName: action.payload };
      case "addname":
        return {...state, name: action.payload} ; 
      case "reset":
        return initialState;
      default:
        return state;
    }
  }

  export default acountReducer;