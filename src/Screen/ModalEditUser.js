import React, { useState } from 'react'
import { Row, Col, Button, Form, Modal} from 'react-bootstrap'
import "./ExpertDashboard.css"
import {useDispatch} from 'react-redux'
import { updateUSER } from '../Redux/Actions/authAction'


const ModalEditUser = ({ el, id}) => {
    const dispatch =useDispatch()
    // const el = useSelector((state) => state.auth.user);
  
    // Update Modal states//
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShowUpdated = () => setShow(true);
   
      // update's state //
      const [update, setUpdate] = useState(
    {id, fullName:el.fullName,phone:el.phone,email:el.email,image:el.image, status:el.status,password:el.password} )
     
    //Handle Change//
      const hanleChange = (e) => {
          const {name, value} = e.target
          setUpdate({...update, [name]:value})
          console.log("input",update)
      }
  
      //UPDATE PLAT //
      const updateUser= (id) => {
       
        dispatch(updateUSER(id, update.fullName,update.phone, update.email,update.image,update.status,update.password ))
        console.log("updaaaate User", update)
      }
  return(
    <div>
 <><i class="far fa-edit"  onClick={handleShowUpdated}></i></>
        <Modal show={show} onHide={handleClose}  size=""
>
            <Modal.Header closeButton className="bgvert">
            <Modal.Title> <h2> Find.Expert </h2> </Modal.Title>
            </Modal.Header>

            <Modal.Body >
              <Row className="d-flex justify-content-center " > 
                <Col  md={10} > 
           

<Form   className="my-2"  >

<Form.Group className="my-2" >
<Form.Control type="text" placeholder="Nom" name='fullName'  defaultValue={el.fullName} onChange={hanleChange}  />

</Form.Group>

<Form.Group className="my-2">
<Form.Control type="text" placeholder="Entrer votre photo"  name='image' defaultValue={el.image} onChange={hanleChange}    />
</Form.Group>

<Form.Group  className="my-2" >
<Form.Control type="text" placeholder="Spécialité " name='Spécialité'  defaultValue={el.Spécialité} onChange={hanleChange}  />

</Form.Group>
<Form.Group className="my-2">
<Form.Control type="text" placeholder="Enter description"  name='Description'   defaultValue={el.Description} onChange={hanleChange}   />
</Form.Group>

<Form.Group className="my-2">
<Form.Control type="tel" placeholder="Enter votre numéro de tel"  name='phone'   defaultValue={el.phone} onChange={hanleChange}   />
</Form.Group>


<Form.Group className="my-2">
<Form.Control type="email" placeholder="Enter votre e-mail"  name='email'   defaultValue={el.email} onChange={hanleChange}  />
</Form.Group>

{/* <Form.Group className="my-2">
<Form.Control type="text" placeholder="status"  name='status'   defaultValue={el.status} onChange={hanleChange}  />
</Form.Group> */}

<Form.Select  aria-label="Default select example " className="my-2" name='status' defaultValue={el.status} onChange={hanleChange}>
                            <option >en attente</option>
                            <option >confirmé</option>
                            <option >refusé</option>

                          </Form.Select>
<Button className="bg-blue mt-4 w-100 " onClick={() => updateUser(el._id)} > Valider les modifications</Button>

</Form>


            </Col>
            </Row>
            </Modal.Body>
            
           
        </Modal>












    </div>
   )

 }

export default ModalEditUser



