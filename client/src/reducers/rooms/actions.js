import { types } from "./index";

export const getRoomsAction = (rooms, payload) => ({
        type: types.GET_ROOMS,
        payload
});

export const resetRoomsAction = () => ({
    type: types.RESET_ROOMS
});