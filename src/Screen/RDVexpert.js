// import React from 'react'
// import {useState, useEffect} from 'react';
// import {useDispatch,useSelector} from 'react-redux'


// const RDVexpert = (props) => {
//     const dispatch = useDispatch()
//     const datas= useSelector(state => state.PUBreducer.datas)

//     useEffect(() => {
//      dispatch(getPUB())
//         }, [dispatch])
//      console.log(datas, "nos plats ???"); 

//   return(
//     <div>

// <Container className="mt-3">

// <Table  hover className="text-center" >
// <thead >
//    <tr>
//      <th>Image</th>
//      <th>Nom</th>
//      <th>Certification</th>
//      <th>Actions </th>


//    </tr>
//  </thead>

//  <tbody>
//  {datas.map(el => (
//    <tr>
//      <td> <img src={el.image} style={{ width: '15rem' , height:"10rem"}} className="imagetable"/> </td>
//      <td> <p> {el.titre}</p> </td>
//      <td> <p> {el.description} </p></td>

//      <td><Button variant="dark"  className="mr-2 btn-sm"  onClick={() => deleteItemm(el._id)}
//  ><i  class="fa fa-times"></i></Button> 
//    <ModalEdit  el={el}  id={el._id} />
//    </td>
//    </tr>
//    ))}
  
//  </tbody>
 
// </Table> 

// </Container>


//     </div>
//    )

//  }

// export default RDVexpert