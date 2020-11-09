import React, { Component } from 'react';
import FormCard from './FormCard';
class SectionCard extends Component {
    state = {
        results: 0,
        show: true,
     }
     render() {
        return  this.state.show ? <FormCard /> :  <p>Twój rachunek: {this.state.results}</p> ;
    }
}

export default SectionCard;