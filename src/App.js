import React from 'react';
import Header from './Components/Header';

import "./Css/App.css"
import { Route } from 'react-router';
import ToDo from './Components/ToDo/ToDo';
import ToDoDetail from './Components/ToDo/ToDoDetail';

function App() {
  return (
    <div className="container">
      <Header />
      <Route exact path="/" component={ToDo}></Route>
      <Route exact path="/:id" component={ToDoDetail}></Route>
    </div>
  );
}

export default App;
