import React from "react";
import { MDBContainer, MDBAlert, MDBIcon, MDBBtn, MDBMedia  } from 'mdbreact';
import {Link} from 'react-router-dom'






class SectionShow extends React.Component{

    handleQuestion = (id) => {
      console.log(id)
      // this.props.history.push(`/answer/${id}`)
    }

  render(){
  return (
    <div>


            <Link style = {{textDecoration : "none", color : "white"}} to = {`/section/${this.props.id}/${this.props.data.name}`}  >
                <MDBBtn color="dark" className="shadow-box-example z-depth-2" style = {{textAlign : "left", width : "97%"}} onClick = {() => this.handleQuestion(this.props.data.id)}  >
                    





            <MDBMedia>
                
                {this.props.data &&  <MDBMedia body> Section &nbsp;{this.props.data.id} &nbsp;: &nbsp; {this.props.data.name}</MDBMedia> }
                <MDBMedia right middle style = {{marginLeft : "10px"}} >
                            <MDBIcon icon="angle-right" style = {{float : "right"}} size = "2x" />
                    </MDBMedia>
                </MDBMedia>


                </MDBBtn>
                </Link>



    </div>
  );
}};

export default SectionShow;