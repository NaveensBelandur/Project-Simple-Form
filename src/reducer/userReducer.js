const intialuserState = {}

const userreducer = (state=intialuserState,action)=>{
    switch(action.type){
        case "ADD_USER":{
            return{...action.payload}
        }
        default:{
            return {...state}
        }
    }
}
export default userreducer