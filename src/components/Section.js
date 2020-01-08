import React from 'react'
import axios from 'axios'

import Navbar from './Navbar'
import SectionShow from './SectionShow'

import { MDBContainer } from 'mdbreact';


class Section extends React.Component{

    constructor(){
        super()
        this.state = {
            data : [],
            title : ''
        }
    }

    componentWillMount = () => {
        axios.get('https://teleological-week.000webhostapp.com/sections.json')
        .then(response => {
            let data = response.data
            const id = this.props.match.params.id
            data = data.find(ele => ele.name == id)
            const title = data.title
            this.setState({title})
            data = data.tags
            console.log(data)
            this.setState({data})
        })

        .catch(err => alert(err))
    }



    handleUrl = () => {
        this.props.history.push("/")
    }


    render(){
        return(
            <div>
                <h1>hiii</h1>
                <Navbar back = {true} handleUrl = {this.handleUrl} />
                <br></br>
                <MDBContainer><strong><h3>{this.state.title}</h3></strong></MDBContainer>
                {
                        this.state.data.length > 1 && this.state.data.map((tag) => {
                            console.log(tag)
                            return(
                                <SectionShow  data = {tag} id = {this.props.match.params.id} />
                            )

                        })
                }

            </div>
        )
    }
}

export default Section