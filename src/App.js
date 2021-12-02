import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from './Components/PrivateRoute';
import routes from './routers/router';
import HomePage from './Pages/HomePage/HomePage';


class App extends Component {

  showContentMenu = (routes) => {
    let result = null;
    result = routes.map((route,index) => {
       return (<Route key={index} path={route.path} exact={route.exact} component= {route.main}/>)
    })
    return <Switch>{result}</Switch>;

  }

  render() {
    return (
      <Router>
        
         {this.showContentMenu(routes)} 
         <PrivateRoute  path='/home' exact={false} component={()=><HomePage/>}  />
      </Router>

    );
  }
}

export default App;