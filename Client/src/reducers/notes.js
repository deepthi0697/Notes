const notesInitialValue = []

const notesReducer = (state = notesInitialValue, action) => {
    switch(action.type){
        case 'SET_NOTES': {
            return [...action.payload]
        }
        case 'POST_NOTE': {
            return {...action.payload}
        }
        case 'EDIT_NOTE': {
            return {...action.payload}
        }
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