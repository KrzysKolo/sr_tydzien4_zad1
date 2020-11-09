import React, { Component } from 'react';
import FormCard from './FormCard';
class SectionCard extends Component {
    state = {
        results: 0,
        show: true,
     }

     render() {
        const a= this.props.results;
        const b = this.props.suma;
        return  this.state.show ? <FormCard /> :  <p>Twój rachunek: {this.state.results}</p> ;
    }
}

export default SectionCard;