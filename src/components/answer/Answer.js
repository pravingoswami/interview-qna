import React from 'react'
import axios from 'axios'

import Navbar from '../Navbar'
import Show from './Show'

import {MDBContainer} from 'mdbreact'


class Answer extends React.Component{
    constructor(){
        super()
        this.state = {
            answer :     
            {
                "id": 8,
                "title": "What does calling a function mean?",
                "answer": "<p>Defining a function does not execute it. Defining the function simply names the function and specifies what to do when the function is called.&nbsp;<strong>Calling</strong>&nbsp;the function actually performs the specified actions with the indicated parameters. For example, if you define the function&nbsp;<code>square</code>, you could call it as follows:</p>\r\n\r\n<pre>\r\n<code>square(5);</code></pre>\r\n\r\n<p>The preceding statement calls the function with an argument of 5. The function executes its statements and returns the value 25.</p>\r\n\r\n<p>Functions must be in scope when they are called, but the function declaration can be hoisted (appear below the call in the code), as in this example:</p>\r\n\r\n<pre>\r\n<code>console.log(square(5));\r\n/* ... */\r\nfunction square(n) { return n * n; }</code></pre>\r\n\r\n<p>The scope of a function is the function in which it is declared, or the entire program if it is declared at the top level.</p>\r\n\r\n<p><strong>Note:</strong>&nbsp;This works only when defining the function using the above syntax (i.e.&nbsp;<code>function funcName(){}</code>). The code below will not work. That means, function hoisting only works with function declaration and not with function expression.</p>\r\n\r\n<pre>\r\n<code>console.log(square); // square is hoisted with an initial value undefined.\r\nconsole.log(square(5)); // TypeError: square is not a function\r\nvar square = function(n) { \r\n  return n * n; \r\n}</code></pre>\r\n",
                "tags" : ["javascript", "variable"],
                "slug": "what-does-calling-a-function-mean"
            },
            questions : [],
            javascript : ["variable", "numbers", "strings"]
        }
    }


    componentDidMount = () => {
        axios.get('https://teleological-week.000webhostapp.com/answer.json')

            .then(response => {
                let questions = response.data
                // console.log(questions)
                // questions = questions.filter(data => data.answer.includes("variable"))
                // questions = this.state.answer.tags.includes("javascript")

                console.log(questions)
                this.setState({questions})
            })
            .catch(err => alert(err))

    }


    handleUrl = () => {
        const id = this.props.match.params.id
        console.log(id)

        this.props.history.push(`/questions/${id}`)
    }

    render(){
        return(
            <div>
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