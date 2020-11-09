import React, { Component } from 'react';
import HeaderCard from './HeaderCard';
import SectionCard from './SectionCard';
import FooterCard from './FooterCard';
import './BillCardF.css';
class BillCardF extends Component {
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

export default BillCardF;