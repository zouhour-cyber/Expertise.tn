// import {fetchLogin} from "../Request"
import axios from "axios";


export const signup = (user) => {

  console.log(user, "afficher user")

  return async (dispatch) => {

      dispatch({type: "USER_REGISTER_REQUEST"});
      const res = await axios.post("http://localhost:4000/user/register", {
          ...user
      });

      if(res.status === 201){
          const { message } = res.data;
          dispatch({
              type: "USER_REGISTER_SUCCESS",
              payload: {message}
          });
      }else{
          if(res.status === 400){
              dispatch({
                  type: "USER_REGISTER_FAILURE",
                  payload: { error: res.data.error }
              });
          }
      }
  }
}
 

export const login =(user)=> {
    console.log(user, "user login")
    return async(dispatch) =>{
   
    try{
       
     const res =  await axios
     .post(`http://localhost:4000/user/signin`,{...user})
            if (res.status === 200){
              
                const {token,user} = res.data
                console.log(token)
                localStorage.setItem('token',token)
                localStorage.setItem('user',JSON.stringify(user))
                dispatch({
                    type:'LOGIN_SUCCESS',
                    payload:{
                        token,user
                    }
                   
                })
            }
            else{
                if(res.status === 400){
                    dispatch({
                        type:"LOGIN_FAILED",
                        payload:{error:res.data.error}
                    })
                }
    
            }
          
            console.log("payload")
       
       
    }
    catch (error) {
              console.log(error);
             }
}
} 
export const isUserLoggedIn = () =>{
    return async dispatch =>{
        const token = localStorage.getItem('token')
        if(token){
            const user = JSON.parse(localStorage.getItem('user'))
          dispatch({
                type:'LOGIN_SUCCESS',
                payload:{
                    token,user
                }
            })
        }else{
            dispatch({type:'LOGIN_FAILED',
                payload:{
                    
                    error:'Failed to login',
                    message:"User needs to login"
                }
            })
        }
    }

}

export const signout = () =>{
    return async dispatch =>{
        localStorage.clear()
        dispatch({
            type:'LOGOUT_SUCCESS'
        })
    }
}


//GET user
export const getUSER= () => async (dispatch) =>  {
    try{    
        const res= await axios.get('http://localhost:4000/user/getuser')
     
        dispatch({
            type:"GET_USER_SUCCEDED",
            payload:res.data

        })
        console.log("sarrraa", res.data)

        }
        catch (error) {
            console.log(error);
         }
} 


  //UPDATE USER
  export const updateUSER =(id,fullName,phone,email,image,status,password,Adresse)  => async dispatch =>{
    try{
     const res = await axios.put(`http://localhost:4000/user/updateUser/${id}`, {fullName,phone,email,image,status,password,Adresse}).then(res=>res.data).then(res=> window.location.reload())
        dispatch({
         type:"UPDATE_USER_SUCEDED",
         payload: res.data
     })
     console.log("superrr")

    }
     catch (error) {
     console.log(error);
   }
 }

 //DELETE Pub
export const deleteUSER = (id)=> async (dispatch) => {
    try {
const res = await axios.delete(`http://localhost:4000/user/deleteUser/${id}`).then(res=>res.data).then(res=> window.location.reload())

      dispatch({
        type:"DELETE_USER_SUCCEDED",
        payload:id
    })
      console.log("User deleted")
      dispatch(getUSER);
    } catch (error) {
      console.log(error);
    }
  }



  export const  getUserbyId= (id) => async (dispatch) =>  {
    try{    
        const res= await axios.get(`http://localhost:4000/user/getUserbyId/${id}`)
        dispatch({
            type:"GET_getUserbyId_SUCCEDED",
            payload:res.data
  
        })
        console.log("Get user by ID", res.data)
  
        }
        catch (error) {
            console.log(error);
         }
  } 