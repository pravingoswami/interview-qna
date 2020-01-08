import React from 'react'
import axios from 'axios'

import CardDesign from './CardDesign'


class Cards extends React.Component{
    constructor(){
        super()
        this.state = {
            sections : []
    }
}

    componentDidMount = () => {
        axios.get('https://teleological-week.000webhostapp.com/sections.json')
            .then(response => {
                const sections = response.data
                console.log(sections)
                this.setState({sections})
            })

            .catch(err => alert(err))
    }


    render(){
        return(
            <div>
                <br></br>
              <br></br>
                {
                    this.state.sections.map(data => {
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