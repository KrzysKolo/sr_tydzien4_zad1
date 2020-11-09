import React from 'react';
import './BillCardFunkcyjny.css';
import HeaderCardFunkcyjny from './HeaderCardFunkcyjny';
import SectionCardFunkcyjny from './SectionCardFunkcyjny';
import FooterCardFunkcyjny from './FooterCardFunkcyjny';
const BillCardFunkcyjny = () => {
    return (
        <div className="billCard__wrapper-funkcyjny">
            <HeaderCardFunkcyjny />
            <FooterCardFunkcyjny />
        </div>
     );
}

export default BillCardFunkcyjny;