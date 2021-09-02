const init = {
    userData:[]
}

const UtilisateurReducer = (state =init,action)=>{
    switch (action.type){
case "GET_USER_SUCCEDED":
    
    state={
       ...state,
       userData:action.payload,
     }

    }
    console.log('utilisateurReducer', state)

    return state
   };
   export default UtilisateurReducer