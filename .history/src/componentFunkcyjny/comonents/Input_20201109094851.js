import React from 'react';
const Input = () => {
    return (
        <>
           <label className="label__BillCard-funkcyjny" htmlFor="form__input-amount">Wysokość rachunku</label>
           <input className="form__items"
                  type="text"
                  id="form__input-amount"
                  name="amount"
                  placeholder="amount..."
                  onChange={props.handleChange}
                  value={props.amount} /><br/>
        </>
     );
}

export default Input;