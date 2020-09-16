import React from 'react';
import { Route, Redirect, Switch, BrowserRouter, useParams } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import ContactDetailPage from './pages/contact-detail/contact-detail.page'
import ContactsPage from './pages/contacts/contacts.page'
import LoginPage from './pages/login/login.page'

import Header from './components/header.component'
import authService from './services/auth.service';

class App extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
      userData: null
    }
  }


  async loadUser(){
    let userData = authService.getLoggedUser()
    this.setState({userData : userData})
  }

  componentDidMount(){
    this.loadUser()
  }

  render(){
    const routes = [
      { route : "/contacts", view : ContactsPage, exact : false},
      { route : "/", view : LoginPage, exact : true},
      { route : "/contact-detail/:id", view : ContactDetailPage, exact : false},
    ]
      return (
        <BrowserRouter>
          <Header title="NAC03">
            {/* <span>
              {this.state.userData}
            </span> */}
            <h1>GoodFit NAC-03</h1>
          
          </Header>
          <Switch>
            {routes.map((item, index) => (
              <Route key={index} path={item.route} component={item.view} exat={item.exact}/>
            ))}
          </Switch>
        </BrowserRouter>
      )
  }
}



export default App;
