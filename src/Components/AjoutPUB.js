import React from 'react'
import {Form,Button,Modal, Container, Table, Row, Col} from "react-bootstrap"
import {useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { ModalEdit } from './ModalEdit';
import {addPUBApi, getPUB, deleteItem} from '../Redux/Actions/PUBActions'

const AjoutPUB = () => {

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
  
<Button  className="bg-blue" variant="dark" onClick={handleShow}>
   Ajouter une publication
</Button>

<Modal show={show} onHide={handleClose}  size="lg">
<Modal.Header className="bg-vert2" closeButton>
<Modal.Title className="title-modal "><h5>Ajouter une publication </h5></Modal.Title>
</Modal.Header>
<Modal.Body>
  <Container>  
    <Row className="d-flex justify-content-center my-3"> <Col md={10}> 
<Form >
<Form.Group className="mt-3">
<Form.Control type="text" placeholder="Titre de la publication ..." name='titre' onChange={hanleChange} />
</Form.Group>

<Form.Group className="mt-3">
<Form.Control type="text" placeholder="enter image"  name='image' onChange={hanleChange}   />
</Form.Group>

<Form.Group className="mt-3 " >
<Form.Control  as="textarea" className="form-control" rows={4} type="text" placeholder="Ajouter une description"  name='description' onChange={hanleChange}  />
</Form.Group>

<Button className="bg-blue w-100 mt-4" onClick={addNewPUBLIC}>Ajouter</Button>
</Form>
</Col></Row>
</Container>
</Modal.Body>



</Modal>

<Container className="mt-3">

<Table style={{fontSize:"14px"}} responsive="md" responsive="sm" hover className="text-center" >
<thead >
   <tr>
     <th style={{width:"100px"}}>Image</th>
     <th style={{width:"180px"}}>Titre</th>
     <th style={{width:"400px"}}>Description</th>
     <th>Actions </th>


   </tr>
 </thead>

 <tbody>
 {datas.map(el => (
   <tr>
     <td style={{width:"180px"}}> <img src={el.image} style={{ width: '10rem'}} className="imagetable"/> </td>
     <td style={{width:"100px"}}> <p> {el.titre}</p> </td>
     <td style={{width:"400px"}}> <p> {el.description.slice(0,170)} </p></td>

     <td><Button variant="dark"  className="me-2 btn-sm"  onClick={() => deleteItemm(el._id)}
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

export default AjoutPUB

      