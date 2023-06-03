import {AppState} from './../interface/AppState'
  
  const initialState = {
    count: 0,
    onCart : [{itemIdx:0, itemName: "", itemQuantity: 0}]
  };
  
  // 리듀서 정의
  const appReducer = (state: AppState = initialState, action:any): AppState => {
    
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
      const newPerson:any = action.payload;
      const existingPersonIndex = state.onCart.findIndex(item => item.itemIdx === newPerson.itemIdx);
      if (existingPersonIndex !== -1) {
        // 중복 키 값이 발견된 경우, 기존 객체 대체
        return {
          ...state,
          onCart: [
            ...state.onCart.slice(0, existingPersonIndex),
            newPerson,
            ...state.onCart.slice(existingPersonIndex + 1)
          ]
        };
      } else {
        // 중복 키 값이 없는 경우, 새 객체 추가
        return {
          ...state,
          onCart: [...state.onCart, newPerson]
        };
      }
      case "UPDATECART":
        const { newTitle, newQuantity } = action.payload;
        return {
          ...state,
          onCart: state.onCart.map(item => {
            if (item.itemName === "") {
              return { ...item, itemQuantity: newQuantity };
            }
            return item;
          })
        }
      default:
        return state;
    }
  };
  
  export default appReducer;