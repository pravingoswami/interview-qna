import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter,  MDBTooltip, MDBBtn } from "mdbreact";
import {Link} from 'react-router-dom'



function CardDesign(props){
  return (
    <section className="text-center my-5"  >
        
      <MDBRow  >
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4" >
          <MDBCard wide ecommerce className="shadow-box-example z-depth-3" >
            <MDBCardImage
              cascade
              src={props.data.url}
              top
              alt="sample photo"
            />
            <MDBCardBody cascade className="text-center">
              {/* <a href="#!" className="text-muted">
                <h5>Camera</h5>
              </a> */}
              <MDBCardTitle>
                <strong>
                    <a href="#!">{props.data.title}</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>
                    {props.data.description}
              </MDBCardText>
                    <Link to = {`/questions/${props.data.id}`} ><MDBBtn color="primary" style = {{width : "100%"}} >Explore</MDBBtn></Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}



// function CardDesign(props){
//   return (
//     <section className="text-center my-5">

//       <MDBRow>
//         <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
//           <MDBCard wide ecommerce>
//             <MDBCardImage
//               cascade
//               src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg"
//               top
//               alt="sample photo"
//             />
//             <MDBCardBody cascade className="text-center">
//               {/* <a href="#!" className="text-muted">
//                 <h5>Camera</h5>
//               </a> */}
//               <MDBCardTitle>
//                 <strong>
//                   <a href="#!">GoPro</a>
//                 </strong>
//               </MDBCardTitle>
//               <MDBCardText>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing minima
//                 veniam elit.
//               </MDBCardText>
//                     <MDBBtn color="primary" style = {{width : "100%"}} >Explore</MDBBtn>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </section>
//   );
// }

export default CardDesign;
