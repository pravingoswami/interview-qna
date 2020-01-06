import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import { convertNodeToElement } from 'react-html-parser';


import Navbar from '../Navbar'

  


function Show(props){

        return(
            <div>
                	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/6.1.19/browser.min.js"></script>
                <strong><h4>{props.answer.title}</h4></strong>
                <b1></b1>
                {/* <pre>{props.answer.answer}</pre> */}
                {/* {JSON.parse(props.answer.answer)} */}

                {ReactHtmlParser(props.answer.answer)}




             
            </div>
        )
}

export default Show