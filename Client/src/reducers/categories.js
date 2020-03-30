const categoriesInitial = []

const categoriesReducer = (state = categoriesInitial, action) => {
    switch(action.type){
        case 'GET_CATEGORIES': {
            return [...action.payload]
        }
        case 'ADD_CATEGORY': {
            return state.concat(action.payload)
        }
        case 'DELETE_CATEGORY': {
            return state.filter(category => {
                return category._id !== action.payload._id
            })
        }
        default: {
            return [...state]
        }
    }
}

export default categoriesReducer