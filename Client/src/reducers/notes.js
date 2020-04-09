const notesInitialValue = []

const notesReducer = (state = notesInitialValue, action) => {
    switch(action.type){
        case 'SET_NOTES': {
            return [...action.payload]
        }
        case 'POST_NOTE': {
            return {...action.payload}
        }
        case 'EDIT_NOTE': 
             return state.map(note=>{
                if(note._id==action.payload.id){
                    return Object.assign({},action.payload.data)
                }else{
                    return Object.assign({},note)
                }
            })
        
        case 'DELETE_NOTE': {
            return state.filter(note => {
                return note._id !== action.payload._id
            })
        }
        default: {
            return [...state]
        }
    }
}

export default notesReducer