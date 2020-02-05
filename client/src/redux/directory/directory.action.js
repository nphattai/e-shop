import { FETCH_DIRECTORY_START, FETCH_DIRECTORY_SUCCESS, FETCH_DIRECTORY_FAILURE } from "./directory.type";

export const fetchDirectoryStart = () => ({
    type: FETCH_DIRECTORY_START
});

export const fetchDirectorySuccess = sections => ({
    type: FETCH_DIRECTORY_SUCCESS,
    payload: sections
});

export const fetchDirectoryFailure = message => ({
    type: FETCH_DIRECTORY_FAILURE,
    payload: message
});

