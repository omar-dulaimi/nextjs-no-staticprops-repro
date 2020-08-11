import * as ACTIONS from '../types';

const userReducer = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.ACTION_USER_LOGIN:
            return {
                ...state,
                token: action.token,
                user: action.user,
            };
        default:
            return state;
    }
};

export default userReducer;
