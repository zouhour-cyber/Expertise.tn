
import axios from "axios";
import { deletecontact } from "../Request";

export const  getContact= () => async (dispatch) =>  {
    try{    
        const res= await axios.get('http://localhost:4000/contact/getCONTACT')
        dispatch({
            type:"GET_CONTACT_SUCCEDED", 
            payload:res.data

        })
        console.log("sarrraa", res.data)

        }
        catch (error) {
            console.log(error);
         }
} 


//ADD RDV
export const addContact=(fullName,email,message)=> async (dispatch) =>{
    try{
        const res=await axios.post('http://localhost:4000/contact/addCONTACT', {fullName,email,message});
        dispatch ({
            type:"ADD_CONTACT_SUCCEDED",
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}



//DELETE RDV
export const deleteContact = (id)=> async (dispatch) => {
    try {
  await deletecontact(id);
      dispatch({
        type:"DELETE_CONTACT_SUCCEDED",
        payload:id
    })
      console.log(" CONTACT delete")
      dispatch(getContact);
    } catch (error) {
      console.log(error);
    }
  }

  //UPDATE Contact
   export const updateContact =(id,fullName,email,message)  => async dispatch =>{
       try{
        const res = await axios.put(`http://localhost:4000/contact/updateCONTACT/${id}`, {fullName,email,message}).then(res=>res.data).then(res=> window.location.reload())
           dispatch({
            type:"UPDATE_CONTACT_SUCEDED",
            payload: res.data
        })
        console.log("superrr")

       }
        catch (error) {
        console.log(error);
      }
    }

