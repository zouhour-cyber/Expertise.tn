import React from 'react'
import {Form,Button,Modal, Row, Col, Tab, Tabs} from "react-bootstrap"
import {useState } from 'react';
import FormInscript from './FormInscrit';
import FormConnexion from './FormConnexion';



const ModalInscri = (props) => {

       // Update Modal states//
       const [show, setShow] = useState(false);
       const handleClose = () => setShow(false);
       const handleShowUpdated = () => setShow(true);


  return(
    <div>
    <Button  className="btn btn-success btn-sm"  onClick={handleShowUpdated}> Inscription </Button>
        <Modal show={show} onHide={handleClose}   size="lg">
            <Modal.Header closeButton className="bg-success">
            <Modal.Title> <h2> Expertise.tn </h2> </Modal.Title>
            </Modal.Header>

            <Modal.Body className="">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="d-flex flex-row  mb-3">
   <Tab eventKey="se connecter" title="se connecter">
  <FormConnexion/>
  </Tab>
  
  <Tab eventKey="s'incrire" title="s'incrire">
  <Tabs  defaultActiveKey="profile" id="uncontrolled-tab-example" className="d-flex flex-row justify-content-center mb-3">
  
  <Tab eventKey="Client" title="Je suis Client" >
  <FormInscript/>
  </Tab>
  <Tab eventKey="Expert" title="Je suis Expert">
  <FormInscript/>
  </Tab>

</Tabs>
  </Tab>
 
</Tabs>




            
            </Modal.Body>
            
           
        </Modal>







    </div>
   )

 }

export default ModalInscri