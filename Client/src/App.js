import React from 'react'
//import Category from './categoryList'
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom'
import Register from './components/register'
import Login from './components/login'
import Notes from './components/notes'
import Form from './components/Notes./AddNotes'
import Logout from './components/logout'
import Table from './components/categories/table'
import Home from './components/static/home'
//import Home from './components/static/home'


function App(){
    return(
        
            <BrowserRouter>
                <div>
                    <Link to ='/'>Home</Link>
                     {
                        localStorage.getItem('authKey') ? 
                        (
                            <div>
                                <nav>
                                    <div className = "nav-wrapper">
                                    {/* <a href="#" class="brand-logo">Logo</a> */}
                                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                                        <li><Link to ='/account'>Account</Link></li>
                                        <li>  <Link to = '/notes'>Notes</Link></li>
                                        <li><Link to = '/logout'>Logout</Link></li>
                                    </ul>
                                    </div>
                                </nav>
                            </div>

                        ) :  
                        (
                            <nav>
                                 <div className = "nav-wrapper">  
                                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                                        <li><Link to = '/login'>Login</Link></li>
                                        <li><Link to='/register'>Register</Link></li>
                                        <li><Redirect to ='/'/></li>
                                    </ul>    
                                </div>
                            </nav>
                        )   
                    } 
                    <Switch>
                        <Route path = '/' component = {Home} exact = {true} /> 
                        <Route path = '/login' component = {Login} exact = {true} /> 
                        <Route path='/register' component = {Register} exact= {true} />
                        <Route path = '/notes/addNotes' component = {Form} exact = {true} />
                        <Route path = '/notes' component = {Notes} exact = {true} />
                        <Route path = '/logout' component = {Logout} exact = {true} />
                        <Route path = '/notes/categories' component = {Table}  exact ={true} />
                    </Switch>
                </div>
            </BrowserRouter>
     
    )
}

export default App