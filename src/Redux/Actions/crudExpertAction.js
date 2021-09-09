
import axios from "axios";

//GET EXPERT
export const  getEXPERT= () => async (dispatch) =>  {
    try{    
        const res= await axios.get('http://localhost:4000/expert/getEXPERT')
     
        dispatch({
            type:"GET_EXPERT_SUCCEDED",
            payload:res.data

        })
        console.log("sarrraa", res.data)

        }
        catch (error) {
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