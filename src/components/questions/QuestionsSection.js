import React from 'react'
import axios from 'axios'

import Navbar from '../Navbar'
import TagSection from './TagSection'

import { MDBBreadcrumb, MDBBreadcrumbItem,MDBCollapseHeader,  MDBContainer } from "mdbreact";



class Questions extends React.Component{
    constructor(){
        super()
        this.state = {
            questions : []
        }
    }

    handleUrl = () => {
        this.props.history.push(`/section/${this.props.match.params.id}`)
    }

    // componentDidMount = () => {
    //     axios.get('https://teleological-week.000webhostapp.com/answer.json')

    //         .then(response => {
    //             let questions = response.data
    //             // console.log(questions)
    //             // questions = questions.filter(data => data.answer.includes("variable"))
    //             // questions = this.state.answer.tags.includes("javascript")

    //             console.log(questions)
    //             this.setState({questions})
    //         })
    //         .catch(err => alert(err))

    // }

    componentDidMount = () => {
        const tag = this.props.match.params.tag
        const id = this.props.match.params.id
        console.log(id, tag)
        axios.get('https://teleological-week.000webhostapp.com/javascript.json')
            .then(response => {
                let questions = response.data
                // console.log(questions)
                questions = questions.filter(ele => ele.tags.includes(`${id}` && `${tag}`))
                // console.log(questions.forEach(ele => ele.tags))
                console.log(questions)
                this.setState({questions})

            })

            .catch(err => alert(err))
    }

    render(){
        return(
            <div>
                <Navbar back = {true} handleUrl = {this.handleUrl} />

                <br></br>
                <br></br>
                <br></br>{console.log(this.props.match.params.id, this.props.match.params.tag, this.props.match.params.qua)}

                {/* <div>
                    <h1>{this.props.match.params.tag}</h1>
                </div> */}

            <MDBContainer> <strong><h4>{this.props.match.params.id.toUpperCase()} - {this.props.match.params.tag.toUpperCase()}</h4></strong></MDBContainer>
                {
                
                
                
                    this.state.questions.length > 1 && this.state.questions.map((qua,i) => {
                        // console.log(qua)
                        return(
                            <TagSection data = {qua} number = {i}  id = {this.props.match.params.id} tag = {this.props.match.params.tag}/>
                        )
                    })
                /* 
 

                {
                   Object.keys(this.state.data).length > 0 &&  this.state.data.tags.map((data, i) => {
                       console.log(data)
                    return(
                        <TagSection key = {i} data = {data}/>
                    )
                })
                } */}

            </div>


        )
    }
}

export default Questions