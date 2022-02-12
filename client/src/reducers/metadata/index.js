export const types = {
    GET_METADATA: '[METADATA] GET'
}

export default function reducer(state, action) {
    switch (action.type) {
        case types.GET_METADATA:
            return action.payload
        default:
            return state;
    }
}