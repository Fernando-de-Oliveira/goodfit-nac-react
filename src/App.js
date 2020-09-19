import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

  logout(){
    authService.cleanLoggedUser()
    window.location.reload()
}

  render(){
    const routes = [
      { route : "/contacts", view : ContactsPage, exact : false},
      { route : "/", view : LoginPage, exact : true},
      { route : "/contact-detail/:id", view : ContactDetailPage, exact : false},
    ]
      return (
        <BrowserRouter>
        <Header title="NAC" ref={this.myHeader}>
            <span>
                {this.state.userData?.user?.name}
            </span>
            <button className="btn btn-primary" onClick={e => this.logout()}>
                Sair
            </button>
        </Header>
        <Switch>
            {routes.map((item, index) => (
                <Route key={index} path={item.route} component={item.view} exact={item.exact}/>
            ))}
            <Route path="/login" component={props => <LoginPage {...props} onLogin={() => this.loadUser()}/>} />
        </Switch>
   </BrowserRouter>
      )
  }
}



export default App;
