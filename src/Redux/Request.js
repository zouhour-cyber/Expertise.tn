import Axios from "axios";

import {GET_PUB_API, SERVER_BASE_API} from "./Shared/ApiURL";

// getPub
// export const FetchPUB=()=>
// Axios.get(GET_PUB_API).then(res=>res.data)
//   .catch(error => console.log("majeouch",error))


const Api = Axios.create({ baseURL: "http://localhost:4000/app" });

//addPUB
function addNewPUB(titre,description,image) {
    return Api.post("/PUB/addPUB", {titre,description,image});
  }


  export {addNewPUB} 
  export default {addNewPUB}


export const deleteItems=(id)=> {
Axios.delete(`${SERVER_BASE_API}/PUB/deletePUB/${id}`).then(res=>res.data).then(res=> window.location.reload());
}



export const fetchLogin = (user) =>{
  Axios
    .post(`http://localhost:4000/user/signin`,{...user})
}


export const fetchExpert=(user ) => {
  Axios.get('http://localhost:4000/expert/getEXPERT')
}