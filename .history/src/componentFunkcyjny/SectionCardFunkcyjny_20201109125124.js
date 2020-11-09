import React, { useState } from 'react';
import { Button, Select, Input } from './comonents'
import ParagraphCardFunkcyjny from './ParagraphCardFunkcyjny';

const BillCardFunkcyjny = () => {
    const [amount, setAmount] = useState(0);
    const [tip, setTip] = useState(0);
    const [results, setResults] = useState(0);


    const handleChangeAmount = e => {
        setAmount(parseFloat(e.target.value));
    }
    const handleChangeTip = e => {
        setTip(parseFloat(e.target.value));
    }
    const handleConvert = (e) => {
            e.preventDefault();
            setResults(((amount*1.25)+(amount*1.25)*tip).toFixed(2));

    }

    return (
        <>
             { results ?
              <div>
                    <Input handleChange={handleChangeAmount} />
                    <Select handleChange={handleChangeTip} />
                    <Button handleConvert={handleConvert} />
                </div>
                : <ParagraphCardFunkcyjny result={results} />

             }
        </>
    );
}

export default BillCardFunkcyjny;