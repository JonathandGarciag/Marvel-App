import CryptoJS from "crypto-js"


//Marca de Tiempo = TimeStamp = funacion de SALT
const timeStamp = new Date().getTime()
 
//fetch
const PRIVATE_API_KEY = '144aa866e1001a28a87d6f9a8a6c5cbecc2f6711'

const PUBLIC_API_KEY = '96c4b9d6d4872173a212891a6f02d96c'

const hash = CryptoJS.MD5(timeStamp + PRIVATE_API_KEY + PUBLIC_API_KEY).toString()

const api_url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${PUBLIC_API_KEY}&hash=${hash}`
console.log(api_url)

export const reqCharacters = async () =>{
    const resp = await fetch(api_url)
    const {data} = await resp.json()

    return data
}


