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
            const price = (amount*1.25);
            setResults((price)+(price*tip)).toFixed(2);

    }

    return (
        <>
             { results ?
                <ParagraphCardFunkcyjny result={results} />
                : <div>
                <Input handleChange={handleChangeAmount} />
                <Select handleChange={handleChangeTip} />
                <Button handleConvert={handleConvert} />
            </div>

                }



        </>
    );
}

export default BillCardFunkcyjny;