import {AppState} from './../interface/AppState'
  
  const initialState: AppState = {
    count: 0,
    onCart : [{itemName: "", itemQuantity: 0}]
  };
  
  // 리듀서 정의
  const appReducer = (state = initialState, action: { type: string }) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1,
        };
      case "ADDCART":
        return {
          ...state,
          onCart: state.onCart
        }
      default:
        return state;
    }
  };
  
  export default appReducer;