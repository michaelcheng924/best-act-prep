export const SET_EMAIL = 'app:setEmail';

export function setEmail(email) {
    return {
        type: SET_EMAIL,
        payload: {
            email
        }
    };
}
