import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import List from './Notes./List'

// class Notes extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             notes: []
//         }
//     }

    
//     render(){
//         return (
//             <div>
//                 <h1>Notes</h1>
//                 <button style = {{backgroundColor: "skyblue", border: "1"} }>Add Notes</button>
//                 <button>Show Notes</button>
                
//             </div>
//         )
//     }
// }

function Notes(props){
    
    return (
        <div>
            <h1>Notes - {props.notes.length}</h1>
            <List/>
            <Link to = '/notes/addNotes'>Add notes</Link>
        </div>
    )
}
    


const mapStateToProps = (state) => {
    return {
        notes: state.notes 
    }
}

export default connect(mapStateToProps)(Notes)