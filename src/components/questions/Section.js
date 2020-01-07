import React from "react";
import { MDBContainer, MDBAlert, MDBIcon, MDBBtn, MDBMedia  } from 'mdbreact';
import {Link} from 'react-router-dom'






class Section extends React.Component{

    handleQuestion = (id) => {
      console.log(id)
      // this.props.history.push(`/answer/${id}`)
    }

  render(){
  return (
    <div>
              {/* <MDBAlert color="mdb-color" className="shadow-box-example z-depth-1" >
        <strong>Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!</strong>       <MDBIcon icon="angle-right" style = {{float : "right"}} size = "2x" />
      </MDBAlert>
 */}

<Link style = {{textDecoration : "none", color : "white"}} to = {`/questions/answer/${this.props.data.id}`}  >
      <MDBBtn color="dark" className="shadow-box-example z-depth-2" style = {{textAlign : "left", width : "97%"}} onClick = {() => this.handleQuestion(this.props.data.id)}  >
        





<MDBMedia>
     
     {this.props.data &&  <MDBMedia body> Section {this.props.data.id} &nbsp;: &nbsp; {this.props.data.name}</MDBMedia> }
     <MDBMedia right middle style = {{marginLeft : "10px"}} >
                 <MDBIcon icon="angle-right" style = {{float : "right"}} size = "2x" />
         </MDBMedia>
     </MDBMedia>


      </MDBBtn>
      </Link>

{/*       
            <div body >
            <strong>Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!</strong>  
            </div>

            <div right middle >  
            <MDBIcon icon="angle-right" style = {{float : "right"}} size = "2x" />
            </div> */}




    </div>
  );
}};

export default Section;