import axios from "axios"


export const contactFormAPI = {
    postInfo(name: string, contacts: string, message: string) {
        return axios.post('https://smtp-gmail-server-nodejs.herokuapp.com/sendMessage', {
            name: name,
            contacts: contacts,
            message: message
        }).then(res=>res.data)
    }
}
