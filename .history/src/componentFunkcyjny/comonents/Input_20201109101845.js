import React from 'react';
const Input = ({ value, handleChange }) => {
    return (
        <>
           <label className="label__BillCard-funkcyjny" htmlFor="form__input-amount">Wysokość rachunku</label>
           <input className="form__items"
                  type="text"
                  id="form__input-amount"
                  name="amount"
                  onChange={handleChange}
                  value={value}
                  placeholder="amount..." /><br/>
        </>
     );
}

export default Input;