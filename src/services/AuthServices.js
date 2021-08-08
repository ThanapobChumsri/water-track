import Axios from 'axios'

const auth_key = 'auth-login'
let auth = JSON.parse(localStorage.getItem(auth_key))
const user = auth ? auth.user: ""
const jwt = auth ? auth.jwt : ""
const api_endpoint = process.env.VUE_APP_DATABASE_ENDPOINT || "http://localhost:1337"

export default{
    isAuthen(){
        return (user !== "") && (jwt !== "")
    },
    getUser(){
        return user
    },
    getJwt(){
        return jwt
    },
    async login({ email, password }){
        try{
            let url = api_endpoint+ '/auth/local'
            let body = {
                identifier: email,
                password: password
            }
            let res = await Axios.post(url, body)
            if (res.status === 200){
                localStorage.setItem(auth_key, JSON.stringify(res.data))
                console.log("seccess")
                return{
                    success: true,
                    user: res.data.user,
                    jwt: res.data.jwt
                }
            } else {
                console.log(res)
                return{
                    success: false,
                    message: "Unknown status code "+res.status
                }
            }
        }catch (e){
            if(e.response.status === 400){
                return{
                    success: false,
                    message: e.response.data.message[0].messages[0].message,
                }
            } else {
                console.error(e.response)
                return{
                    success : false,
                    message : "Unknown error: "+ e.response
                }
            }
        }
    },
    logout(){

    },
    register(){

    },
}