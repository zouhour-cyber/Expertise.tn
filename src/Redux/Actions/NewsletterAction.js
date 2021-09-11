
import axios from "axios";
import { deleteNews} from "../Request";

export const  getNewsletter= () => async (dispatch) =>  {
    try{    
        const res= await axios.get('http://localhost:4000/newsletter/getNEWSLETTER')
        dispatch({
            type:"GET_NEWSLETTER_SUCCEDED",
            payload:res.data

        })
        console.log("sarrraa", res.data)

        }
        catch (error) {
            console.log(error);
         }
} 


//ADD NEWSLETTER
export const addNewsletter=(email)=> async (dispatch) =>{
    try{
        const res=await axios.post("http://localhost:4000/newsletter/addNEWSLETTER", {email });
        dispatch ({
            type:"ADD_NEWSLETTER_SUCCEDED",
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}



//DELETE NEWSLETTER
export const deleteNewsletter = (id)=> async (dispatch) => {
    try {
  await deleteNews(id);
      dispatch({
        type:"DELETE_NEWSLETTER_SUCCEDED",
        payload:id
    })
      console.log(" Newsletter delete")
      dispatch(getNewsletter);
    } catch (error) {
      console.log(error);
    }
  }



