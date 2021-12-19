import React, { useEffect } from "react"
import { useParams, useSearchParams } from "react-router-dom"


let Article =(props)=>{
let param = useParams()
let serch = useSearchParams()
console.log(param, serch)
useEffect(()=>{
    console.log("say hello")
}, [])
    return(
    <div>Article</div>
    )
}
export default Article
