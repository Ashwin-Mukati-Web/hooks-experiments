import React, { useReducer } from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <UserInfo />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
const initialState = {
  name: '',
  email: '',
  age: 0,
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'name':
      return {
        ...state,
        name: action.data,
      };
    case 'email':
      return {
        ...state,
        email: action.data,
      };
    case 'age':
      return {
        ...state,
        age: action.data,
      };
  }
  return state;
};
function UserInfo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  let updateFormInfo = (fieldName) => (e) => {
    dispatch({ type: fieldName, data: e.target.value });
  };
  return (
    <form>
      <input type="text" value={state.name} onChange={updateFormInfo('name')} />
      <input
        type="text"
        value={state.email}
        onChange={updateFormInfo('email')}
      />
      <input type="number" value={state.age} onChange={updateFormInfo('age')} />
    </form>
  );
}
