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

export const editNote = (note, id) => {
    return {
        type: 'EDIT_NOTE',
        payload: {
            'data': note,
            'id':id
        }
    }
}

export const startEditNote = (id,data) => {
    return(dispatch) => {
        axios.put(`/notes/${id}`, data, {
            headers: {
                'x-auth': localStorage.getItem('authKey')
            }
        })
        .then((response) => {
            const note = response.data
            dispatch(editNote(note, id))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const deleteNote = (note) => {
    return {
        type: 'DELETE_NOTE',
        payload: note
    }
}

export const startDeleteNote = (id) => {
    return(dispatch) => {
        axios.delete(`/notes/${id}`, {
            headers : {
                'x-auth': localStorage.getItem('authKey')
            }
        })
        .then((response) => {
            const note = response.data
            dispatch(deleteNote(note))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}