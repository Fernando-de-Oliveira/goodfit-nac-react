import axios from 'axios';

const apiUrl = "https://kosmic-forum-api.herokuapp.com";


const authService = {

    async authenticate(data) {
        const endpoint = `${apiUrl}/auth/sign-in`
        return axios.post(endpoint, data);
    },

    setLoggedUser(data){
        let parsedData = JSON.stringify(data)
        localStorage.setItem("user", parsedData)
    },

    getLoggedUser(){
        let data = localStorage.getItem("user");
        if(!data) return null;
        try {
            let parsedData = JSON.parse(data)
            return parsedData
        } catch (error) {
            console.log(error)
            return null
        }
    },

    cleanLoggedUser(){
        localStorage.clear()
    }
}

export default authService;