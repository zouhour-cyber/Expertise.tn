
const initialState={
    datasNEWSLETTER : []
  } 
  
   export const NEWSLETTERreducer = ( state = initialState, action) => {
   const { type, payload } = action;
    switch (type){
      case "GET_NEWSLETTER_SUCCEDED":
    
        return {
          ...state,
          datasNEWSLETTER: payload,
        }


        case "ADD_NEWSLETTER_SUCCEDED":
          return {
           ...state,
           datasNEWSLETTER: [...state.datasNEWSLETTER, payload]
     
          }

          case "DELETE_NEWSLETTER_SUCCEDED":
            return {
              ...state,
              datasNEWSLETTER: state.datasNEWSLETTER.filter(
                data => data._id !== payload
              )
          }


        
    }
    console.log('NEWSLETTER reducer', state)
    return state; 
  };


  