
const initialState={
    datasCONTACT : []
  } 
  
   export const CONTACTreducer = ( state = initialState, action) => {
   const { type, payload } = action;
    switch (type){
      case "GET_CONTACT_SUCCEDED":
    
        return {
          ...state,
          datasCONTACT: payload,
        }


        case "ADD_CONTACT_SUCCEDED":
          return {
           ...state,
           datasCONTACT: [...state.datasCONTACT, payload]
     
          }

          case "DELETE_CONTACT_SUCCEDED":
            return {
              ...state,
              datasCONTACT: state.datasCONTACT.filter(
                data => data._id !== payload
              )
          }


        
    }
    console.log('CONTACT reducer', state)
    return state; 
  };


  