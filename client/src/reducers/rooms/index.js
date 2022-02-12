export const types = {
    GET_ROOMS: '[ROOMS] GET',
    RESET_ROOMS: '[ROOMS] RESET'
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case types.GET_ROOMS:
            return [
                ...state,
                ...action.payload
            ]
        case types.RESET_ROOMS:
            return [];
        default:
            return state;
    }
}