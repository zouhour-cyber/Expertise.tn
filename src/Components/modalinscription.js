import React from 'react'
import {Form,Button,Modal, Row, Col, Tab, Tabs} from "react-bootstrap"
import {useState } from 'react';
// import FormInscript from './FormInscrit';
// import FormConnexion from './FormConnexion';
import RegisterExpert from '../authScreen/RegisterExpert';
import SignIn from '../authScreen/SignIn';
// import Register from '../authScreen/Register';
import RegisterUserForm from '../authScreen/userRegister';



const ModalInscri = (props) => {

       // Update Modal states//
       const [show, setShow] = useState(false);
       const handleClose = () => setShow(false);
       const handleShowUpdated = () => setShow(true);


  return(
    <div>
    <Button  className="btn btn-outline-success btn-sm"  onClick={handleShowUpdated}> Inscription </Button>
        <Modal show={show} onHide={handleClose}   size="lg">
            <Modal.Header closeButton className="bg-success">
            <Modal.Title> <h4> Expertise.tn </h4> </Modal.Title>
            </Modal.Header>

            <Modal.Body className="">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="d-flex flex-row  mb-3">
   <Tab eventKey="se connecter" title="se connecter">
  <SignIn/>
  </Tab>
  
  <Tab eventKey="s'incrire" title="s'incrire">
  <RegisterUserForm/>

  </Tab>
 
</Tabs>




            
            </Modal.Body>
            
           
        </Modal>







    </div>
   )

 }

export default ModalInscri