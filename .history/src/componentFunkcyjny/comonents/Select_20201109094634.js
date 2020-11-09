import React from 'react';
const Select = () => {
    return (
        <>
            <label className="label__BillCard-funkcyjny" htmlFor="form__select">Wybierz wysokość napiwku</label>
            <select className="form__items"
                        name="tip"
                        id="form__select"
                        onChange={props.handleChange}
                        value={tip}>
                            <option value=""> -  tip  - </option>
                            <option value="0.05">5%</option>
                            <option value="0.10">10%</option>
                            <option value="0.15">15%</option>
                            <option value="0.20">20%</option>
            </select> <br />
        </>
     );
}

export default Select;