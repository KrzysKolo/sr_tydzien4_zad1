
import React from 'react';
const  FormCardFunkcyjny = (props) => {
    return (
        <section className="billCard__section-funkcyjny">
        <form>
            <label className="label__BillCard-funkcyjny" htmlFor="form__input-amount">Wysokość rachunku</label>
            <input className="form__items"
                       type="text"
                       id="form__input-amount"
                       name="amount"
                       placeholder="amount..."
                       onChange={props.handleChange}
                       value={props.amount} /><br/>
            <label className="label__BillCard-funkcyjny" htmlFor="form__select">Wybierz wysokość napiwku</label>
            <select className="form__items"
                           name="tip"
                           id="form__select"
                           onChange={props.handleChange}
                           value={props.tip}>
                               <option value=""> -  tip  - </option>
                               <option value="0.05">5%</option>
                               <option value="0.10">10%</option>
                               <option value="0.15">15%</option>
                               <option value="0.20">20%</option>
                </select> <br />
                <button className="btn__BillCard-funkcyjny" type="submit" onClick={props.handleConvert}>Przelicz</button>
        </form>
    </section>
     );
}
export default FormCardFunkcyjny;