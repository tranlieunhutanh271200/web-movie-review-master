import ACTIONS from '../actions/'

const rating = ''

const ratingReducer = (state = rating, action) => {
    switch(action.type){
        case ACTIONS.GET_RATING_MOVIE:
            return action.payload
        default:
            return state
    }
}

export default ratingReducer