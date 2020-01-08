import React from 'react'

import Navbar from '../Navbar'
import TagSection from './TagSection'

import { MDBBreadcrumb, MDBBreadcrumbItem,MDBCollapseHeader,  MDBContainer } from "mdbreact";



class Questions extends React.Component{
    constructor(){
        super()
        this.state = {
            catagories : [
                {id : 1, title : "JavaScript Questions", tags : [
                    {
                        id : 1,
                        name : "variabale"
                    },
                    {
                        id : 2,
                        name : "numbers"
                    },
                    {
                        id : 3,
                        name : "strings"
                    },
                    {
                        id : 4,
                        name : "boolean"
                    },
                    {
                        id : 5,
                        name : "arrays"
                    },
                    {
                        id : 6,
                        name : "hashes"
                    },
                    {
                        id : 7,
                        name : "conditions"
                    },
                    {
                        id : 8,
                        name : "loop"
                    },
                    {
                        id : 9,
                        name : "functions"
                    }
            ], url : "https://analyticsindiamag.com/wp-content/uploads/2019/11/javascript.png"},

                {id : 2, title : "React for Absolute Beginners", tags : ["INTRODUCTION TO REACT", "JSX (JAVASCRIPT XML)"], url : "https://miro.medium.com/max/3840/1*vHHBwcUFUaHWXntSnqKdCA.png"},

                {id : 3, title : "React Interview Questions", tags : ["CORE REACT", "REACT ROUTER"], url : "https://i.udemycdn.com/course/750x422/1362816_c4a6_3.jpg"}
            ],
            data : {}
        }
    }

    handleUrl = () => {
        this.props.history.push("/")
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        this.setState(prevState => ({
            data : prevState.catagories.find(ele => ele.id == id)
        }))
    }

    render(){
        return(
            <div>{console.log(this.state.data)}
                <Navbar back = {true} handleUrl = {this.handleUrl} />

                <br></br>
                <br></br>
                <br></br>
                <MDBContainer> <b><h3>{this.state.data.title}</h3></b></MDBContainer>
 

                {
                   Object.keys(this.state.data).length > 0 &&  this.state.data.tags.map((data, i) => {
                       console.log(data)
                    return(
                        <TagSection key = {i} data = {data}/>
                    )
                })
                }

            </div>
        )
    }
}

export default Questions