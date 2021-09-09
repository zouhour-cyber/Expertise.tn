
import axios from "axios";
import { deleterdv } from "../Request";

export const  getRDV= () => async (dispatch) =>  {
    try{    
        const res= await axios.get('http://localhost:4000/app/rdv/getRDV')
        dispatch({
            type:"GET_RDV_SUCCEDED",
            payload:res.data

        })
        console.log("sarrraa", res.data)

        }
        catch (error) {
            console.log(error);
         }
} 


//ADD RDV
export const addRDVApi=(date,heure,idExpert,nameExpert,nameUser,idUser,statusRDV)=> async (dispatch) =>{
    try{
        const res=await axios.post("http://localhost:4000/app/rdv/addRDV", {date,heure,idExpert,nameExpert,nameUser,idUser,statusRDV });
        dispatch ({
            type:"ADD_RDV_SUCCEDED",
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}



//DELETE RDV
export const deleteRDV = (id)=> async (dispatch) => {
    try {
  await deleterdv(id);
      dispatch({
        type:"DELETE_RDV_SUCCEDED",
        payload:id
    })
      console.log(" rdv delete")
      dispatch(getRDV);
    } catch (error) {
      console.log(error);
    }
  }

  //UPDATE RDV
   export const updateRDV =(id,date,heure,statusRDV)  => async dispatch =>{
       try{
        const res = await axios.put(`http://localhost:4000/app/rdv/updateRDV/${id}`, {date,heure,statusRDV}).then(res=>res.data).then(res=> window.location.reload())
           dispatch({
            type:"UPDATE_RDV_SUCEDED",
            payload: res.data
        })
        console.log("superrr")

       }
        catch (error) {
        console.log(error);
      }
    }

