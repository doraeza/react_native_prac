import {AppState} from './../interface/AppState'
  
  const initialState = {
    count: 0,
    onCart : []
  };
  
  // 리듀서 정의
  const appReducer = (state: any = initialState, action:any): AppState => {
    
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
      const newPerson:{itemIdx:number, itemName: string, itemQuantity: number} = action.payload;
      const existingPersonIndex = state.onCart.findIndex((item:{itemIdx:number, itemName: string, itemQuantity: number}) => item.itemIdx === newPerson.itemIdx);
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
      case "DELETECART":
        const itemIdxToRemove:{itemIdx:number} = action.payload;
        // let updatedCart = state.onCart.filter((item:{itemIdx:number, itemName: string, itemQuantity: number}) => item.itemIdx !== itemIdxToRemove.itemIdx);
        // const updatedCart = state.onCart.findIndex(item => item.itemIdx !== itemIdxToRemove.itemIdx);
        return {
          ...state,
          items: state.onCart.filter((item:{itemIdx:number, itemName: string, itemQuantity: number}) => item.itemIdx !== itemIdxToRemove.itemIdx)
        };
      // case "UPDATECART":
      //   const { newTitle, newQuantity } = action.payload;
      //   return {
      //     ...state,
      //     onCart: state.onCart.map(item => {
      //       if (item.itemName === "") {
      //         return { ...item, itemQuantity: newQuantity };
      //       }
      //       return item;
      //     })
      //   }
      default:
        return state;
    }
  };
  
  export default appReducer;