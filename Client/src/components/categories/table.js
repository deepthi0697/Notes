import React from 'react'
import {connect} from 'react-redux'
import { startAddCategory, startDeleteCategory } from '../../actions/categories'
import configureStore from '../../store/configureStore'
 

class Table extends React.Component{
    constructor(props){
        super()
        this.state = {
            count: 0,
            name: '',
            newCategory: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const store = configureStore()
        const formData = {
             name: this.state.newCategory
        }
        store.dispatch(startAddCategory(formData))
    }

    handleRemove = (id) => {
        const store = configureStore()
        store.dispatch(startDeleteCategory(id))
    }
    render(){
        return(
            <div>
                {
                    this.props.categories.length === 0 ? (
                        <div>
                            <p>loading...</p>
                        </div>
                    ): (
                        <div>
                            <h1>Categories - {this.props.categories.length}</h1>
                            <table border = '1'>
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.categories.map((category) => {
                                            return (
                                                <tr key = {category._id}>
                                                
                                                    <td>{category.name}</td>
                                                    <td><button onClick = {() => {this.handleRemove(category._id)}}>Remove</button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                }
            
                    <br />
                    <form onSubmit = {this.handleSubmit}>
                        <label htmlFor = 'newCategory'>Add new category</label> <br />
                        <input type='text' id = 'newCategory' name='newCategory' onChange = {this.handleChange} value = {this.state.newCategory} /> {' '}
                        
                        <input type='submit' value='Add' /> 
                    </form>
                  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.categories)
    return{
        categories: state.categories
    }
}

export default connect(mapStateToProps)(Table)