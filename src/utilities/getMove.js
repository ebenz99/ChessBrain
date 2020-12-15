import axios from 'axios';
import { BACKEND_ENDPOINT } from '../constants.js';

const getMove = (boardStateHash) => {
    return axios({method: 'get', url: `${BACKEND_ENDPOINT}nextmove`,
        params: {
            'board': boardStateHash
        }
    })
    .then((response) => {
        return response
    }, (error) => {
        return error;
    });
}

export default getMove;