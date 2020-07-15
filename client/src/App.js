import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
import Home from "./pages/Home.js";
import Blog from "./pages/Blog.js";
import Stream from "./pages/Stream.js";
import Merch from "./pages/Merch.js"; 
import Leaderboard from "./pages/Leaderboard"; 
import '../src/style/style.css';


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
          <Route exact path ="/blog" component={Blog} />
          <Route exact path ="/merch" component={Merch}/>
          <Route exact path ="/stream" component={Stream}/>
          <Route exact path ="/leaderboard" component={Leaderboard}/>

        </Router>
      </div>
    )
  }

}

export default App;
