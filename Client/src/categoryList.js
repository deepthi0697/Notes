import React from 'react'
import Axios from 'axios'

class Category extends React.Component {
    constructor(){
        super()
        this.state = {
            categories : []
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:3033/categories')
            .then((response) => {
                const categories = response.data
                this.setState({categories})
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render(){
        return (
            <div>
                
                <h2>Categories - {this.state.categories.length} </h2>
            </div>    
        )
    }
}

export default Category