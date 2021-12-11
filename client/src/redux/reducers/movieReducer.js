import ACTIONS from '../actions/'

const initialState = {
    movie: [],
    rating:''
}

const movieReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTIONS.GET_MOVIE:
            return {
                ...state,
                movie: action.payload.movie,
            }
        default:
            return state
    }
}

export default movieReducer