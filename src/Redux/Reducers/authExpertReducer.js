

// const inisialState ={
//     token:null,
//     expert:{
//         fullName:'',
//         email:'',
//         phone:'',
//         Spécialité:'',
//         Description:'',
//         image:''
 
//     },
//     authenticate:false,
//     authenticating:false 
// }

//  const authExpertReducer = (state =inisialState,action)=>{
//   switch (action.type){
//      case" LOGIN_FAILED":
//         state = {
//             ...state,
//              authenticating:false

//            }
//            break
//       case 'LOGIN_SUCCESS':
//                state ={
//                    ...state,
//                    expert:action.payload.expert,
//                    token:action.payload.token,
//                    authenticate:true
//                }
               
//                break
       
         
//           case 'LOGOUT_SUCCESS':
//           state={
//            ...inisialState
//                     }
//                break;
          
       
//         }


//         console.log('authexpertReducer', state)

//  return state
// };
// export default authExpertReducer