const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const Counter = ({ value,
  onIncrement,
  onDecrement
 }) => (
  <div>
  <h1>{value}</h1>
  <button onClick={onIncrement}>+</button>
  <button onClick={onDecrement}>-</button>
  </div>
  );

const { createStore } = Redux;
// var createStore = Redux.createStore;

// const createStore = (reducer) => {
//   let state;
//   let listeners = [];

//   const getState = () => state;

//   const dispatch = (action) => {
//     state = reducer(state, action);
//     listeners.forEach(listener => listener());
//   };

//   const subscribe = (listener) => {
//     listeners.push(listener);
//     return () => {
//       listeners = listeners.filter(l => l !== listener);
//     };
//   };

//   dispatch({});

//   return { getState, dispatch, subscribe };
// };

const store = createStore(counter);

console.log(store);

const render = () => {
  // document.body.innerText = store.getState();
  ReactDOM.render(
      <Counter value = {store.getState()}
          onIncrement={() =>
  store.dispatch({
    type: 'INCREMENT'
  })
          }
          onDecrement = {() =>
  store.dispatch({
    type: 'DECREMENT'
  })

          }


       />,
      document.getElementById('root')
    );
};

// console.log(store.getState());

// store.dispatch({ type: 'INCREMENT' });
// console.log(store.getState());

store.subscribe(render);
render();

// document.addEventListener('click', () => {
//   store.dispatch({ type: 'INCREMENT' });
// });