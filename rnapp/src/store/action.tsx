export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// 액션 생성자 함수 정의
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});