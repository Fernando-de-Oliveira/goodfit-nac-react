import React from 'react'
import authService from '../../services/auth.service';
import { Redirect } from 'react-router-dom';
import { contactService } from "../../services/contacts.service";

class ContactsPage extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            title: 'Contatos',
            redirectTo : null
        }
    }


    async componentDidMount(){
        let loggedUser = await authService.getLoggedUser()
        if(!loggedUser){
            console.log("Redirecionando", loggedUser)
            this.setState({redirectTo : "/login"})
        }
    }

    render(){

        if (this.state.redirectTo) {
            return (
                <Redirect to={this.state.redirectTo}/>
            )
        }

        return(
            <div className="container">
                <h2>{this.state.title}</h2>
            </div>
        )
    }
}

export default ContactsPage;