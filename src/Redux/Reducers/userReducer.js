const initState = {
    error: null,
    message: '',
    loading: false
}
export const UserRegisterReducer = (state = initState, action) => {
    switch(action.type){
        case "USER_REGISTER_REQUEST":
            state = {
                ...state,
                loading: true
            }
            break;
        case "USER_REGISTER_SUCCESS":
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
            break;
        case "USER_REGISTER_FAILURE":
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
            // case "GET_USER_SUCCEDED":
    
            //     state ={
            //       ...state,
                  
            //       user:action.payload.user,
            //       token:action.payload.token,
                 

            //     }
    }

    return state;
}