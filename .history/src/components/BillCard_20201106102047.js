import React, { Component } from 'react';
import HeaderCard from './HeaderCard';
import SectionCard from './SectionCard';
import './BillCard.css';
class BillCard extends Component {
    state = {  }
    render() {
        return (
            <div className="billCard__wrapper">
                <HeaderCard/>
            </div>
         );
    }
}

export default BillCard;