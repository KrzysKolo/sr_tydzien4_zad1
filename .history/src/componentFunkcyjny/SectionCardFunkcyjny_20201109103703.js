import React, { useState } from 'react';
import { Button, Select, Input } from './comonents'
import ParagraphCardFunkcyjny from './ParagraphCardFunkcyjny';

const BillCardFunkcyjny = () => {
    const [amount, setAmount] = useState(0);
    const [tip, setTip] = useState(0);
    const [results, setResults] = useState(0);
    const [show, setResultssetShow] = useState("true");
    const handleChange =e => {
        e.target.name = e.target.value;
    }

    return ( <div>
        <Input value={amount} handleChange={setAmount} />
        <Select value={tip} handleChange={setTip} />
        <Button />
    </div> );
}

export default BillCardFunkcyjny;