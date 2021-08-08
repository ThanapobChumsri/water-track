import Axios from 'axios'

const api_endpoint = process.env.VUE_APP_DATABASE_ENDPOINT || "http://localhost:1337"

export default{
    isAuthen(){
        return false
    },
    getUser(){
        return user
    },
    async login({ email, password }){
        try{
            let url = api_endpoint+ '/auth/local'
            let body = {
                identifier: email,
                password: password
            }
            let res = await Axios.post(url, body)
            console.log(res)
        }catch (e){
            console.error(e)
        }
    },
    logout(){

    },
    register(){

    },
}