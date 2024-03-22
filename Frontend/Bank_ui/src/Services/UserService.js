import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/user/add';

const UserService = {
    getAllUsers: () => {
        return axios.get(API_BASE_URL);
    },

    getUserByUsername: (username) => {
        return axios.get(API_BASE_URL + username);
    }

};

export default UserService;
