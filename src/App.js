import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
          <InputTodo />
          <TodoList />
    </Provider>
  );
}

export default App;
