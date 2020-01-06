import React from "react";
import { MDBContainer, MDBAlert, MDBIcon, MDBBtn, MDBMedia  } from 'mdbreact';



const handleQuestion = () => {
    console.log('hiiii')
}


function Section (props){



  return (
    <div>
              {/* <MDBAlert color="mdb-color" className="shadow-box-example z-depth-1" >
        <strong>Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!</strong>       <MDBIcon icon="angle-right" style = {{float : "right"}} size = "2x" />
      </MDBAlert>
 */}

      <MDBBtn color="dark" className="shadow-box-example z-depth-2" style = {{textAlign : "left", width : "97%"}} onClick = {handleQuestion()} >
        




            <MDBMedia>{console.log(props.data)}
     
                {props.data &&  <MDBMedia body>{props.data}</MDBMedia> }
                <MDBMedia right middle style = {{marginLeft : "10px"}} >
                            <MDBIcon icon="angle-right" style = {{float : "right"}} size = "2x" />
                    </MDBMedia>
                </MDBMedia>

      </MDBBtn>

{/*       
            <div body >
            <strong>Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!Holy guacamole!</strong>  
            </div>

            <div right middle >  
            <MDBIcon icon="angle-right" style = {{float : "right"}} size = "2x" />
            </div> */}




    </div>
  );
};

export default Section;