import ACTIONS from './index'

export const dispatchLogin = (user) => {
    return {
        type: ACTIONS.LOGIN,
        payload: user
    }
}
