//import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import logo from "./logo.svg";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

class App extends Component {
  render(){
    return(

      <Router>
        <div className="container">
            {/* <h2>MERN-Stack Todo App</h2> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
                  <img src={logo} width="30" height="30" alt="COdingTheSmartWay.com"/>
                </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                      <Link to="/" className="nav-link">Todos</Link>
                  </li>
                  <li className="navbar-item">
                      <Link to="/create" className="nav-link">Create Todo</Link>
                  </li>
                  <li className="navbar-item">
                      <Link to="/edit/:id" className="nav-link">Edit Todo</Link>
                  </li>
              </ul>

            </div>
            </nav>
            <br/>
            <Route path="/" exact component={TodosList}/>
            <Route path="/edit/:id" component={EditTodo}/>
            <Route path="/create" component={CreateTodo}/>
        </div>
      </Router>
    );
  }

}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;
