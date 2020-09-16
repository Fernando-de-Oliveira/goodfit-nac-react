import React from 'react';
import {withRouter} from "react-router";
import  './snackbar.css';

class Snackbar extends React.Component{

    constructor(props){
      super(props)
      this.state = { }
    }

    render(){

        return (
          <div>
            <p className={this.props.show === "true" ? 'show' : 'hidden'}>{this.props.status}</p>
          </div>         
        )
    }
}

export default withRouter(Snackbar);