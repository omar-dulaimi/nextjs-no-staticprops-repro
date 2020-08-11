import * as ACTIONS from '../types';

export const userLogin = (user, token) => ({
    type: ACTIONS.ACTION_USER_LOGIN,
    user: user,
    token: token,
});
