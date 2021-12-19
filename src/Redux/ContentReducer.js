import {getData} from '../API/api'


let initialState = {
    data: null, 
    Fetching: false
}
let ContentReducer =(state=initialState, action)=>{
    switch(action.type){
        case "getData":
            return{
                ...state,
                data: {...action.data, results: sortByDate(action.data.results)}
            }
        case "Fetching":
            return{
                ...state,
                Fetching: action.fetching
            }
        default: return state
    }
}

let setDataAC =(data)=>({type:"getData", data});
let FetchingAC =(fetching)=>({type:"Fetching", fetching});
let sortByDate =(obj)=>{
    let SortDate=(a, b)=>{
        return new Date(b.webPublicationDate) - new Date(a.webPublicationDate)
    }
    return obj.sort(SortDate);
  }
  
export const setDataThunk =()=>{
    return (dispatch)=>{
        dispatch(FetchingAC(true))
        getData().then(data=>{
            dispatch(setDataAC(data.response))
            dispatch(FetchingAC(false))
        })
    }
}

export default ContentReducer