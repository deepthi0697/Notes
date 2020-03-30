import axios from '../config/axios'

export const getCategories = (categories) => {
    return {
        type: 'GET_CATEGORIES',
        payload: categories
    }
}

export const startGetCategories = () => {
    return(dispatch) => {
        axios.get('/categories', {
            headers: {
                'x-auth': localStorage.getItem('authKey')
            }
        })
        
        .then((response) => {
            const categories = response.data
            dispatch(getCategories(categories))
        })
        
        .catch((err) => {
            console.log(err)
        })
    }
}

export const addCategory = (category) => {
    console.log(category)
    return {
        type: 'ADD_CATEGORY',
        payload: category
    }
}

export const startAddCategory = (category) => {
    console.log('started adding category')
    return(dispatch) => {
        axios.post('/categories', category, {
            headers: {
                'x-auth': localStorage.getItem('authKey')
            }
        })
        .then((response) => {
            const category = response.data
            dispatch(addCategory(category))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const deleteCategory = (category) => {
    return {
        type: 'DELETE_CATEGORY',
        payload: category
    }
}

export const startDeleteCategory = (id) => {
    return(dispatch) => {
        axios.delete(`/categories/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('authKey')
            }
        })
        .then((response) => {
            const category = response.data
            dispatch(deleteCategory(category))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}