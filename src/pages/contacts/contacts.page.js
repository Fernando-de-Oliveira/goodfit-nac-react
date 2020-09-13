import React from 'react'

class ContactsPage extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            title: 'Contatos'
        }
    }
    render(){
        return(
            <div className="container">
                <h2>{this.state.title}</h2>
            </div>
        )
    }
}

export default ContactsPage;