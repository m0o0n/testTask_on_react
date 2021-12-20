import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom"


let Article =(props)=>{
let param = useParams()
let navigate = useNavigate()

// useEffect(()=>{
//     console.log("say hello")
// }, [])
let goBack =()=>{navigate(-1)}
    return(
    <div>
        <button onClick={goBack}>goBack</button> 
        Article
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        state: state
    }
}
export default connect(mapStateToProps)(Article) 
