import socketIOClient from "socket.io-client";
import {baseURL} from "../api";

export const socket = socketIOClient(baseURL);

export default function searchSocket(cb) {
    socket.on('search', data => {
        cb(data);
    });

    return () => socket.disconnect();
}