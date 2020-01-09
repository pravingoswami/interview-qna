import React from 'react'
import axios from 'axios'

import Navbar from '../Navbar'
import Show from './Show'

import {MDBContainer} from 'mdbreact'


class Answer extends React.Component{
    constructor(){
        super()
        this.state = {
            answer : {},
    }
}


    componentDidMount = () => {
        axios.get('https://teleological-week.000webhostapp.com/javascript.json')

            .then(response => {
                let questions = response.data
                console.log(this.props.match.params.qua)
                console.log(questions)
                let answer = questions.find(data => data.slug.includes(`${this.props.match.params.qua}`))
                // questions = this.state.answer.tags.includes("javascript")

                console.log(answer)
                this.setState({answer})
            })
            .catch(err => alert(err))

    }




    handleUrl = () => {
        this.props.history.push(`/section/${this.props.match.params.id}/${this.props.match.params.tag}`)
    }

    render(){
        return(
            <div>{console.log(this.props.match.params.id, this.props.match.params.tag)}
                <Navbar back = {true} handleUrl = {this.handleUrl}/>
                <br></br>
                <br></br>
                <br></br>
                <MDBContainer>
                <Show answer = {this.state.answer} />
                </MDBContainer>

            </div>
        )
    }
}

export default Answer
























// import React from 'react'
// import axios from 'axios'

// import Navbar from '../Navbar'
// import Show from './Show'

// import {MDBContainer} from 'mdbreact'


// class Answer extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             answer : {}
//     }


//     componentDidMount = () => {
//         axios.get('https://teleological-week.000webhostapp.com/javascript.json')

//             .then(response => {
//                 let questions = response.data
//                 // console.log(questions)
//                 // questions = questions.filter(data => data.answer.includes("variable"))
//                 // questions = this.state.answer.tags.includes("javascript")

//                 console.log(questions)
//                 this.setState({questions})
//             })
//             .catch(err => alert(err))

//     }


//     handleUrl = () => {
//         const id = this.props.match.params.id
//         console.log(id)

//         this.props.history.push(`/questions/${id}`)
//     }

//     render(){
//         return(
//             <div>
//                 <Navbar back = {true} handleUrl = {this.handleUrl}/>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 <MDBContainer>
//                 <Show answer = {this.state.answer} />
//                 </MDBContainer>

//             </div>
//         )
//     }
// }

// export default Answer