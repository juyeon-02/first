// App.jsx
import { legacy_createStore } from 'redux';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';

// Action 객체 정의
const increase = { type: 'increment' };
const decrease = { type: 'decrement' };

// 리듀서 정의
const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'increment':
      return { counter: state.counter + 1 };
    case 'decrement':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

// Redux store 생성
export const store = legacy_createStore(counterReducer);

function App() {
  // state에서 counter만 선택
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch()

  return (
    <div>
      <p>카운터: {counter}</p>
      <button onClick={()=> dispatch(increase)}>+</button>
      <button onClick={()=> dispatch(decrease)}>-</button>
    </div>
  );
}

export default App;
