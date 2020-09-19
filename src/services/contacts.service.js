// Importanto biblioteca responsável por requisições HTTP
import axios from 'axios';
import authService from './auth.service';

// Definindo a base do url para os endpoints
const apiUrl = "https://kosmic-forum-api.herokuapp.com";

// Definindo o objeto do serviço
const contactService = {

    // Definindo a função que recupera a lista de tópicos
    async getAll() {
        
        const endpoint = `${apiUrl}/contacts`;

        // Recuperando usuário logado
        const user = await authService.getLoggedUser()

        // Fazendo requisição e enviando o token
        return axios.get(endpoint, { 
            headers : { authorization : `Bearer ${user.token}` }
        });
    },

    // Definindo a função que exbibe um tópico específico
    async getById(contactId) {

        let endpoint = `${apiUrl}/contacts/${contactId}`
        
        // Recuperando usuário logado
        const user = await authService.getLoggedUser()

        // Fazendo requisição e enviando o token
        return axios.get(endpoint, { 
            headers : { authorization : `Bearer ${user.token}` }
        });
    }

}

export default contactService;