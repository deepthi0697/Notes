import React from 'react'
import axios from 'axios'
//import { format } from 'path'

class Register extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
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
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }
        axios.post('http://localhost:3033/notes/register', formData)
            .then((user) => {
                console.log(user)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render(){
      return (
            <div>
                <h1>Register user</h1>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = 'name'>Name</label>
                    <input type='text' id='name' name='name' onChange={this.handleChange} value={this.state.name}/>
                    <br />
                    <label htmlFor = 'email'>Email</label>
                    <input type='text' id='email' name='email' onChange={this.handleChange} value={this.state.email}/>
                    <br />
                    <label htmlFor = 'password'>Password</label>
                    <input type='password' id='password' name='password' onChange={this.handleChange} value={this.state.password}/>
                    <br />
                    <input type='submit' value= 'Register'/>
                </form>
            </div>
        )
    }
}

export default Register