import {addNewPUB, deleteItems} from '../Request'
import axios from "axios";


//GET PLAT
export const  getPUB= () => async (dispatch) =>  {
    try{    
        const res= await axios.get('http://localhost:4000/app/PUB/getPUB')
        dispatch({
            type:"GET_PUB_SUCCEDED",
            payload:res.data

        })
        console.log("sarrraa", res.data)

        }
        catch (error) {
            console.log(error);
         }
} 


//ADD PLAT
export const addPUBApi=(titre, description ,image )=> async (dispatch) =>{
    try{
        const res=await addNewPUB (titre, description ,image);
        dispatch ({
            type:"ADD_PUB_SUCCEDED",
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}

//DELETE Pub
export const deleteItem = (id)=> async (dispatch) => {
    try {
  await deleteItems(id);
      dispatch({
        type:"DELETE_PUB_SUCCEDED",
        payload:id
    })
      console.log("delete")
      dispatch(getPUB);
    } catch (error) {
      console.log(error);
    }
  };

  //UPDATE PUB
   export const updateItem =(id, titre , description ,image)  => async dispatch =>{
       try{
        const res = await axios.put(`http://localhost:4000/app/PUB/updatePUB/${id}`, {titre, description ,image}).then(res=>res.data).then(res=> window.location.reload())
           dispatch({
            type:"UPDATE_PUB_SUCEDED",
            payload: res.data
        })
        console.log("superrr")

       }
        catch (error) {
        console.log(error);
      }
    }