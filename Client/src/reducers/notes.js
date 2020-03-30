const notesInitialValue = []

const notesReducer = (state = notesInitialValue, action) => {
    switch(action.type){
        case 'SET_NOTES': {
            return [...action.payload]
        }
        case 'POST_NOTE': {
            return {...action.payload}
        }
        default: {
            return [...state]
        }
    }
}

export default notesReducer