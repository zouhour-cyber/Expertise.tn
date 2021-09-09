import React from 'react'
import {Form,Button,Modal, Container, Table} from "react-bootstrap"
import {useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { ModalEdit } from './ModalEdit';
import {addPUBApi, getPUB, deleteItem} from '../Redux/Actions/PUBActions'

const AddPubExpert = () => {

  //state de modal 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()


const datas= useSelector(state => state.PUBreducer.datas)

    useEffect(() => {
     dispatch(getPUB())
        }, [dispatch])
     console.log(datas, "nos plats ???");


const [input,setInput]=useState({titre:"",description:"", image:"" })

const hanleChange=(e)=>{
    const {name,value}=e.target
    setInput({
        ...input,
        [name]:value
    })
    console.log("input",input)
}

//ADD Menu 
const addNewPUBLIC=()=>{
dispatch (addPUBApi(input.titre , input.description, input.image)) 
console.log("inpuuuuuuuuuuuut",input)
setShow(false)
}


 //DeleteMenu
 const deleteItemm =(id)=>{
  dispatch (deleteItem(id) )
  console.log(deleteItem(id))
}
  return(
    <div>
    <div className='container mt-5'>
 <Button variant="primary" onClick={handleShow}>
   Ajouter une publication
</Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className="title-modal">Ajouter une publication</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form >
<Form.Group controlId="formBasicEmail">
<Form.Label>Titre </Form.Label>
<Form.Control type="text" placeholder="titre" name='titre' onChange={hanleChange} />

</Form.Group><Form.Group controlId="formBasicPassword">
<Form.Label>Description</Form.Label>
<Form.Control type="text" placeholder="enter description"  name='description' onChange={hanleChange}  />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label>image</Form.Label>
<Form.Control type="text" placeholder="enter image"  name='image' onChange={hanleChange}   />
</Form.Group>



<Button className="btn-block" onClick={addNewPUBLIC}>Ajouter</Button>
</Form>
</Modal.Body>



</Modal>

<Container className="mt-3">

<Table  hover className="text-center" >
<thead >
   <tr>
     <th>Image</th>
     <th>Titre</th>
     <th>Description</th>
     <th>Actions </th>


   </tr>
 </thead>

 <tbody>
 {datas.map(el => (
   <tr>
     <td> <img src={el.image} style={{ width: '10rem'}} className="imagetable"/> </td>
     <td> <p> {el.titre}</p> </td>
     <td> <p> {el.description} </p></td>

     <td><Button variant="dark"  className="mr-2 btn-sm"  onClick={() => deleteItemm(el._id)}
 ><i  class="fa fa-times"></i></Button> 
   <ModalEdit  el={el}  id={el._id} />
   </td>
   </tr>
   ))}
  
 </tbody>
 
</Table> 

</Container>



</div>
</div>
   )

 }

export default AddPubExpert

      