const axios = require('axios')
const DB_URL = 'https://capture-flag1.herokuapp.com/api/user';

export const addUser = async user => {
    const { name, username, password, confirm } = user 
    const { data } = await axios.post(DB_URL, { name, username, password, confirm })
    return data
}

export const getUser = async () => {
    const { data } = await axios.get(DB_URL)
    return data
}


