import React from 'react'
import Axios from 'axios'
//import Notes from './notes'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        Axios.post('http://localhost:3033/notes/login', formData)
            .then((response) => {
                // console.log(response.data)
                if(response.data === 'invalid email/password'){
                   this.props.history.push('/')
                }else{
                    const token = response.data
                    console.log(token)
                    localStorage.setItem('authKey', token)
                    this.props.history.push('/notes')
                }
                
                
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render(){
        return (
            <div>
                <h3>Login Page</h3>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = 'email'>Email</label>
                    <input type='text' id='email' name='email' onChange={this.handleChange} value={this.state.email}/>
                    <br />
                    <label htmlFor = 'password'>Password</label>
                    <input type='password' id='password' name='password' onChange={this.handleChange} value={this.state.password}/>
                    <br />
                    <input type='submit' value= 'Login'/>
                </form>
            </div>
        )
    }
}

export default Login