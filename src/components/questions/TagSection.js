import React from "react";
import { MDBContainer, MDBAlert, MDBIcon, MDBBtn, MDBMedia  } from 'mdbreact';
import {Link} from 'react-router-dom'



class TagSection extends React.Component{

    // handleQuestion = (id) => {
    //   console.log(id)
    //   // this.props.history.push(`/answer/${id}`)
    // }

  render(){
  return (
    <div>


            <Link style = {{textDecoration : "none", color : "white"}} to = {`/section/${this.props.id}/${this.props.data.name}`}    >
                <MDBBtn color="dark" className="shadow-box-example z-depth-2" style = {{textAlign : "left", width : "97%"}} onClick = {() => this.handleQuestion(this.props.data.id)}  >
                    





            <MDBMedia>
                
                {this.props.data &&  <MDBMedia body> {this.props.number+1}. &nbsp; {this.props.data.title}</MDBMedia> }
                <MDBMedia right middle style = {{marginLeft : "10px"}} >
                            <MDBIcon icon="angle-right" style = {{float : "right"}} size = "2x" />
                    </MDBMedia>
                </MDBMedia>


                </MDBBtn>
                </Link>



    </div>
  );
}};

export default TagSection;





// import React from "react";
// import { MDBContainer, MDBAlert, MDBIcon, MDBBtn, MDBMedia  } from 'mdbreact';
// import {Link} from 'react-router-dom'






// class TagSection extends React.Component{

//     handleQuestion = (id) => {
//       console.log(id)
//       // this.props.history.push(`/answer/${id}`)
//     }

//   render(){
//   return (
//     <div>
//               {/* <MDBAlert color="mdb-color" className="shadow-box-example z-depth-1" >
//         <strong>Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!</strong>       <MDBIcon icon="angle-right" style = {{float : "right"}} size = "2x" />
//       </MDBAlert>
//  */}

// <Link style = {{textDecoration : "none", color : "white"}} to = {`/questions/answer/${this.props.data.id}`}  >
//       <MDBBtn color="dark" className="shadow-box-example z-depth-2" style = {{textAlign : "left", width : "97%"}} onClick = {() => this.handleQuestion(this.props.data.id)}  >
        





// <MDBMedia>
     
//      {this.props.data &&  <MDBMedia body> Section {this.props.data.id} &nbsp;: &nbsp; {this.props.data.name}</MDBMedia> }
//      <MDBMedia right middle style = {{marginLeft : "10px"}} >
//                  <MDBIcon icon="angle-right" style = {{float : "right"}} size = "2x" />
//          </MDBMedia>
//      </MDBMedia>


//       </MDBBtn>
//       </Link>

// {/*       
//             <div body >
//             <strong>Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!</strong>  
//             </div>

//             <div right middle >  
//             <MDBIcon icon="angle-right" style = {{float : "right"}} size = "2x" />
//             </div> */}




//     </div>
//   );
// }};

// export default TagSection;