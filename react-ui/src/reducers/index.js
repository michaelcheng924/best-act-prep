import { SET_EMAIL } from 'app/actions';

export default function appReducer(state = {}, { type, payload }) {
    switch (type) {
        case SET_EMAIL:
            return {
                ...state,
                email: payload.email
            };
        default:
            return state;
    }
};
