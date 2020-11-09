import React, { useState } from 'react';
import FormCardFunkcyjny from './FormCardFunkcyjny';
import ParagraphCardFunkcyjny from './ParagraphCardFunkcyjny';

const BillCardFunkcyjny = () => {
    const [amount, setAmount] = useState(0);
    const [tip, setTip] = useState(0);
    const [results, setResults] = useState(0);
    const [show, setResultssetShow] = useState("true");
    return ( <div>
        <FormCardFunkcyjny />
    </div> );
}

export default BillCardFunkcyjny;