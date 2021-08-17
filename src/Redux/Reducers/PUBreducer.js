

const initialState={
    datas : []
  } 
  
   export const PUBreducer = ( state = initialState, action) => {
    const { type, payload } = action;
    switch (type){
      case "GET_PUB_SUCCEDED":
    
        return {
          ...state,
          datas: payload,
        }


        case "ADD_PUB_SUCCEDED":
          return {
           ...state,
           datas: [...state.datas, payload]
     
          }

          case "DELETE_PUB_SUCCEDED":
            return {
              ...state,
              datas: state.datas.filter(
                data => data._id !== payload
              )
            }

            
        
    }
    console.log('inchallah labes si ali', state)
    return state; 
  };


  