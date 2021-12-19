import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import PostTepmpalte from "./PostTemplate";
import {setDataThunk} from '../../Redux/ContentReducer'
let Content =(props)=>{
    useEffect(()=>{
        props.setDataThunk()
        console.log("Rerender")
      }, [])
    console.log(props.state.ContentReducer.data, props.Fetching)

   if(!props.Fetching && !props.state.ContentReducer.data){
       return <div>Loading</div>
   }else if(props.Fetching && !props.state.ContentReducer.data){
    return <div>Loading</div>
   }else{
 console.log(props.state.ContentReducer.data.results)
 return(
    <div id="content_greed_container">
        <div className="content_greed" id="content_greed">
           {props.state.ContentReducer.data.results.map(p=>{
               return <PostTepmpalte 
            imageSource={p.fields.thumbnail} 
            h3Article={p.webTitle}
            shortText={p.fields.trailText} 
            date={p.webPublicationDate}/>
           })}
              
        </div>
    </div>
)
   }
       
    

    
}
const mapStateToProps=(state)=>{
    return{
        state: state,
        Fetching: state.ContentReducer.Fetching
    }
}
export default connect(mapStateToProps,{setDataThunk})(Content)