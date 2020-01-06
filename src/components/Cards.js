import React from 'react'

import CardDesign from './CardDesign'


class Cards extends React.Component{
    constructor(){
        super()
        this.state = {
            catagories : [
                {id : 1, title : "JavaScript Questions", description : ["VARIABLES", "DATA TYPES - STRING , NUMBER"], url : "https://analyticsindiamag.com/wp-content/uploads/2019/11/javascript.png"},

                {id : 2, title : "React for Absolute Beginners", description : ["INTRODUCTION TO REACT", "JSX (JAVASCRIPT XML)"], url : "https://miro.medium.com/max/3840/1*vHHBwcUFUaHWXntSnqKdCA.png"},

                {id : 3, title : "React Interview Questions", description : ["CORE REACT", "REACT ROUTER"], url : "https://i.udemycdn.com/course/750x422/1362816_c4a6_3.jpg"}
            ]
        }
    }

    render(){
        return(
            <div>
                <br></br>
              <br></br>
                {
                    this.state.catagories.map(data => {
                        return(
                            <CardDesign key = {data.id} data = {data} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Cards