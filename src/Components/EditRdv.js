import {useState} from 'react'
import {Button, Modal, Form , Row, Col} from 'react-bootstrap'
import {updateRDV} from '../Redux/Actions/RDVactions'
import {useDispatch} from 'react-redux'


    export const EditRdv = ({ el, id}) => {
    
    // Update Modal states//
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShowUpdated = () => setShow(true);
    const dispatch =useDispatch()
  
    // update's state //
    const [update, setUpdate] = useState(
  {date:el.date,heure:el.heure,statusRDV:el.statusRDV} )

    //Handle Change//
    const hanleChange = (e) => {
        const {name, value} = e.target
        setUpdate({...update, [name]:value})
        console.log("input",update)
    }

    //UPDATE RDV //
    const updaterdv= () => {
      dispatch(updateRDV(id, update.date,update.heure,update.statusRDV,update.AdresseRDV ))
      console.log("updaaaate", update)
      setShow(false)
    }

  return(
      <>
    <Button  className="btn-sm btn-edit ms-1"  onClick={handleShowUpdated}><i class="far fa-edit"></i></Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="bg-vert2">
            <Modal.Title> <h5> Confirmation du rendez-vous </h5> </Modal.Title>
            </Modal.Header>

            <Modal.Body className="bgdark">
              <Row> 
                <Col  md={10} className="mx-auto my-4" > 
           
                <Form >
<Form.Group controlId="formBasicEmail" className="mt-3">
<Form.Control type="date" placeholder="date" name='date' defaultValue={el.date} onChange={hanleChange} />

</Form.Group><Form.Group controlId="formBasicPassword" className="mt-3">
<Form.Control type="time" placeholder="enter heure"  name='heure'  defaultValue={el.heure}  onChange={hanleChange}  />
</Form.Group>

<Form.Group controlId="formBasicPassword" className="mt-3">
<Form.Control type="text" placeholder="enter AdresseRDV"  name='AdresseRDV' defaultValue={el.AdresseRDV} onChange={hanleChange}   />
</Form.Group>

{/* <Form.Group controlId="formBasicPassword">
<Form.Label> <h6>Status </h6></Form.Label>
<Form.Control type="text" placeholder="enter statusRDV"  name='statusRDV' defaultValue={el.statusRDV} onChange={hanleChange}   />
</Form.Group> */}

<Form.Select  aria-label="Default select example " className="mt-4"  name='statusRDV' defaultValue={el.statusRDV} onChange={hanleChange} >
                            <option> en attente</option>
                            <option >confirmé</option>
                            <option >annuler</option>
</Form.Select>


<Button className="btn-block w-100 bg-blue mt-4" onClick={updaterdv}> Valider les modifications</Button>

</Form>


            </Col>
            </Row>
            </Modal.Body>
            
           
        </Modal>
        </>
    )
}
