import React, { Component } from 'react';
import HeaderCard from './HeaderCard';
import SectionCard from './SectionCard';
import FooterCard from './FooterCard';
import './BillCardFunkcyjny.css';
class BillCardFunkcyjny extends Component {
    state = {  }
    render() {
        return (
            <div className="billCard__wrapper">
                <HeaderCard/>
                <SectionCard />
                <FooterCard />
            </div>
         );
    }
}

export default BillCardFunkcyjny;