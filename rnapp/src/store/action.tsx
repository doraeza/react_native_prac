export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADDCART = 'ADDCART'
export const UPDATECART = 'UPDATECART'
// 액션 생성자 함수 정의
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const addCart = ({payload}:{payload:{itemIdx:number, itemName: string, itemQuantity: number}}) => ({
  type: ADDCART,
  payload: payload
})

export const updateCart = () => ({
  type: UPDATECART,
})