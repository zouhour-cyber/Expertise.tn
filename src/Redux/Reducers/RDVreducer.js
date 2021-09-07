

const initialState={
    datasRDV : []
  } 
  
   export const RDVreducer = ( state = initialState, action) => {
   const { type, payload } = action;
    switch (type){
      case "GET_RDV_SUCCEDED":
    
        return {
          ...state,
          datasRDV: payload,
        }


        case "ADD_RDV_SUCCEDED":
          return {
           ...state,
           datasRDV:[...state.datasRDV, payload]
     
          }

          case "DELETE_RDV_SUCCEDED":
            return {
              ...state,
              datasRDV: state.datasRDV.filter(
                data => data._id !== payload
              )
          }


        
    }
    console.log('RDV reducer', state)
    return state; 
  };


  