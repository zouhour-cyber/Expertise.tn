const initial = {
    NosexpertsData:[]
}

const expertsReducer = (state =initial,action)=>{
    switch (action.type){
case "GET_EXPERT_SUCCEDED":
    
    state={
       ...state,
       NosexpertsData:action.payload,
     }

     case "GET_getUserbyId_SUCCEDED":
        return {
          ...state,
          NosexpertsData: action.payload
          
        }
    }
    console.log('expertsReducer', state)

    return state
   };
   export default expertsReducer