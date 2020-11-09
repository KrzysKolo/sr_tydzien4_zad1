import React, { Component } from 'react';
class SectionCard extends Component {
    state = {
        bill: {
            amount: "",
            tip: "",
        },
        results: 0
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
         const amount = parseFloat(this.state.bill.amount);
         const tip = parseFloat(this.state.bill.tip);
         let newResult = ({amount}*0.08)+({amount}*0.08)*{tip};
         this.setState({
             results: newResult,
         })

     }
    render() {
        console.log(this.bill.results);
        return (
            <section className="billCard__section">
                <p>Twój rachunek: </p>
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
                        <option value=""> -- wybierz -- </option>
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
}

export default SectionCard;