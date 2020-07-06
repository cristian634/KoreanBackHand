import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
import Home from "./pages/Home.js"
import '../src/style/style.css'


class App extends Component {
  constructor(props){
    super(props);

    this.state = {currentUser: {user: {}}};

  }
  render(){
    // console.log(this.state); 

    return (
      
      <div className = "app">
        <Router>
      
          <Route exact path ="/" component={Home} />
        </Router>
      </div>
    )
  }

}

export default App;
