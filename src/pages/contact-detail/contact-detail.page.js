import React from 'react';

class ContactDetailPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            contact: null
        }
    }
    render(){
        return(
            <h1>contato detalhe</h1>
        )
    }
}

export default ContactDetailPage