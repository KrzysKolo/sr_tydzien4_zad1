import React from 'react';
const FormCards = () => {
    state = {
        bill: {
            amount: "",
            tip: 0,
        },
    }
     handleChange = e => {
        let  newBill = {
         ...this.state.bill,
         [e.target.name]: e.target.value,
         }

         this.setState({
             bill: newBill
         })
     }
     handleConvert = (e) => {
        e.preventDefault();
        const price = parseFloat(this.state.bill.amount)*1.08;
        const tip = parseFloat(this.state.bill.tip);
        const suma = (price+(price*tip)).toFixed(2);
         this.setState({
            results: suma,
            bill: {
                amount: "",
                tip: 0,
            },
            show: false,
         })
     }
    return (
        <section className="billCard__section">
                <form>
                    <label className="label__BillCard" htmlFor="form__input-amount">Wysokość rachunku</label>
                    <input className="form__items"
                           type="text"
                           id="form__input-amount"
                           name="amount"
                           placeholder="amount..."
                           onChange={this.handleChange}
                           value={this.state.bill.amount} /><br/>
                    <label className="label__BillCard" htmlFor="form__select">Wybierz wysokość napiwku</label>
                    <select className="form__items"
                            name="tip"
                            id="form__select"
                            onChange={this.handleChange}
                            value={this.state.bill.tip}>
                                <option value=""> -- tip -- </option>
                                <option value="0.05">5%</option>
                                <option value="0.10">10%</option>
                                <option value="0.15">15%</option>
                                <option value="0.20">20%</option>
                    </select> <br />
                    <button className="btn__BillCard" type="submit" onClick={this.handleConvert}>Przelicz</button>
                </form>
            </section>
     );
}

export default FormCards;