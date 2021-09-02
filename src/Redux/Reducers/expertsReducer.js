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

    }
    console.log('expertsReducer', state)

    return state
   };
   export default expertsReducer