import CryptoJS from "crypto-js"
import { useEffect, useState } from "react"
import { reqCharacters } from "../services/characters"

export const useCharacters = () =>{

    const [characters, setCharacters] = useState()

    //indicar al useState que omita la función = hook propio de React (useEffect)
    useEffect(()=>{
        //codigo que interesa limitar
        //
        reqCharacters().then((data) =>{
            setCharacters(data.results)
        })
    }, [])
    
    const formatImageUrl = (char) => {
            const imagePath = char.thumbnail
            const url_image = `${imagePath.path}.${imagePath.extension}`
            console.log(url_image)
            return url_image
    }

    return{
        characters,
        formatImageUrl,
    }
}