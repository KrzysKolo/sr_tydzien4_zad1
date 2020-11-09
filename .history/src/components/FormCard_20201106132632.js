import React from 'react';
const FormCards = (props) => {
    const { amount, tip } = props;
    const { handleChange } = props.handleChange
    const { handleConvert } = props.handleConvert
    return (
        <section className="billCard__section">
                <form>
                    <label className="label__BillCard" htmlFor="form__input-amount">Wysokość rachunku</label>
                    <input className="form__items"
                           type="text"
                           id="form__input-amount"
                           name="amount"
                           placeholder="amount..."
                           onChange={handleChange}
                           value={amount} /><br/>
                    <label className="label__BillCard" htmlFor="form__select">Wybierz wysokość napiwku</label>
                    <select className="form__items"
                            name="tip"
                            id="form__select"
                            onChange={handleChange}
                            value={tip}>
                                <option value=""> -- tip -- </option>
                                <option value="0.05">5%</option>
                                <option value="0.10">10%</option>
                                <option value="0.15">15%</option>
                                <option value="0.20">20%</option>
                    </select> <br />
                    <button className="btn__BillCard" type="submit" onClick={handleConvert}>Przelicz</button>
                </form>
            </section>
     );
}

export default FormCards;