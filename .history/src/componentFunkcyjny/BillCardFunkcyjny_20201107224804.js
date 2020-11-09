import React from 'react';
import './BillCardFunkcyjny.css';
import HeaderCardFunkcyjny from './HeaderCardFunkcyjny';
import SectionCardFunkcyjny from './SectionCardFunkcyjny';
const BillCardFunkcyjny = () => {
    return (
        <div className="billCard__wrapper-funkcyjny">
            <HeaderCardFunkcyjny />
            <SectionCardFunkcyjny />
        </div>
     );
}

export default BillCardFunkcyjny;