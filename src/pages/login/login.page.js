import React from 'react'
import authService from '../../services/auth.service'
import SnackBar from '../../components/snackbar.component'
import { Redirect } from 'react-router-dom'

class LoginPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username : "",
            password: "",
            redirectTo: null,
            title: 'Login',
            loggedUser: false
        }
    }


    renderSnackBar = () => {
        console.log("LOG " + this.state.loggedUser)
        if (this.state.loggedUser) {
            return <SnackBar status="Login Sucess" show={this.state.loggedUser}/> 
        } else{
            return <SnackBar status="Login Error" show={this.state.loggedUser}/> 
        }
    
    }

    sendLogin = async (event) => {
        event.preventDefault();
        
        const data = {
            nickName : this.state.username,
            password: this.state.password
        }
        

        try {
           // let res = await authService.authenticate(data)
            //console.log("res", res.data)
            //authService.setLoggedUser(res.data)
            this.setState({loggedUser : true})
        } catch (error) {
            console.log(error)
            this.setState({loggedUser : false})
        }

    }

    render(){

        if (this.state.redirectTo) {
            return(
                <Redirect to={this.state.redirectTo}/>
            )
        }

        return (
            <div className="container d-flex justify-content-center">
                <div className="card mt-5 w-50">
                    <div className="card-body">
                        <form onSubmit={this.sendLogin}>
                            <div className="form-group">
                                <label htmlFor="nickName">Usuário</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    id="nickName" 
                                    name="nickName" 
                                    placeholder="Usuário" 
                                    value={this.state.username}
                                    onChange={e => this.setState({username : e.target.value})}
                                    />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Senha</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    name="password" 
                                    placeholder="Senha"
                                    value={this.state.password}
                                    onChange={e => this.setState({password : e.target.value})}
                                    />
                            </div>
                            <button type="submit" className="btn btn-primary">Entrar</button>
                        </form>
                    </div>
                    {this.renderSnackBar()}
                </div>
            </div>
        )
    }
}

export default LoginPage