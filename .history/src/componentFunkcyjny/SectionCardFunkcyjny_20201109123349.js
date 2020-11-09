import React, { useState } from 'react';
import { Button, Select, Input } from './comonents'
import ParagraphCardFunkcyjny from './ParagraphCardFunkcyjny';

const BillCardFunkcyjny = () => {
    const [amount, setAmount] = useState(0);
    const [tip, setTip] = useState(0);
    const [results, setResults] = useState(0);
    const [show, setShow] = useState("true");

    const handleChangeAmount = e => {
        setAmount(parseFloat(e.target.value));
    }
    const handleChangeTip = e => {
        setTip(parseFloat(e.target.value));
    }
    const handleConvert = (e) => {
            e.preventDefault();
            setResults(((amount*0.25)+(amount*0.25)*tip).toFixed(2));
            setShow("false");
    }

    return (
        <h5>dd</h5>
        { show ?  <div>
        <Input handleChange={handleChangeAmount} />
        <Select handleChange={handleChangeTip} />
        <Button handleConvert={handleConvert} />
    </div>  : <ParagraphCardFunkcyjny result={results} /> }
     );
}

export default BillCardFunkcyjny;