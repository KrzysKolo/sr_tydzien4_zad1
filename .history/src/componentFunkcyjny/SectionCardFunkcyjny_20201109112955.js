import React, { useState } from 'react';
import { Button, Select, Input } from './comonents'
import ParagraphCardFunkcyjny from './ParagraphCardFunkcyjny';

const BillCardFunkcyjny = () => {
    const [amount, setAmount] = useState(0);
    const [tip, setTip] = useState(0);
    const [results, setResults] = useState(0);
    const [show, setResultssetShow] = useState("true");

    const handleChangeAmount = e => {
        setAmount(parseFloat(e.target.value));
    }
    const handleChangeTip = e => {
        setTip(parseFloat(e.target.value));
    }
    const onSubmit = e => {
        e.preventDefault();
    }

    return ( <div>
        <Input handleChange={handleChangeAmount} />
        <Select handleChange={handleChangeTip} />
        <Button />
    </div> );
}

export default BillCardFunkcyjny;