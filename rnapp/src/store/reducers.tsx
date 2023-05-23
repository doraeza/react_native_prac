interface AppState {
    count: number;
  }
  
  const initialState: AppState = {
    count: 0,
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
      default:
        return state;
    }
  };
  
  export default appReducer;