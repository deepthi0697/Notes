import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import List from './Notes./List'
import 'materialize-css'


function Notes(props){
    return (
        <div>
            <h1>Notes - {props.notes.length}</h1>
            <List/>
            <div className="fixed-action-btn">
                <a className="btn-floating btn-large red">
                <Link to = '/notes/addNotes'><i className="large material-icons">+</i></Link>
                </a>
            </div>
        </div>
    )
}
    


const mapStateToProps = (state) => {
    return {
        notes: state.notes 
    }
}

export default connect(mapStateToProps)(Notes)