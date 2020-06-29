import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
import Home from "./pages/Home.js"

class App extends Component {
  constructor(props){
    super(props);

    this.state = {currentUser: {user: {}}};

  }
  render(){
    console.log(this.state); 
    return (
      <div>
        <Router>
          <Route exact path ="/" component={Home} />
        </Router>
      </div>
    )
  }

}

export default App;
