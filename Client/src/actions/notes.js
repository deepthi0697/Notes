import axios from '../config/axios'

export const setNotes = (notes) => {
    return {
        type: 'SET_NOTES',
        payload: notes
    }
}

export const startGetNotes = () => {
    return(dispatch)=> {
        axios.get('/notes', {
            headers : {
                'x-auth': localStorage.getItem('authKey')
            }
        })
            .then((response) => {
                const notes = response.data
                dispatch(setNotes(notes))
            })
            .catch((err )=> {
                console.log(err)
            })
    }
}

export const postNote = (note) => {
    return {
        type: 'POST_NOTE',
        payload: note
    }
}

export const startPostNote = (formData) => {
    return(dispatch) => {
        axios.post('/notes', formData ,  {
            headers : {
                'x-auth': localStorage.getItem('authKey')
            }
        })
        .then((response) => {
            const note = response.data
            dispatch(postNote(note))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}