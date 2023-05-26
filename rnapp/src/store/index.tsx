import { createStore } from 'redux';
import appReducer from './reducers';

// 스토어 생성
const store = createStore(appReducer);

export default store;