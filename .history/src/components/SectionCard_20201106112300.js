import React, { Component } from 'react';
class SectionCard extends Component {
    state = {
        bill: {
            amount: "",
            tip: "",
        }
     }
     handleChange = e => {
        let  bill = {
         ...this.state.bill,
         [e.target.amount]: e.target.value,
         }
     }
    render() {
        return (
            <section className="billCard__section">
                <p>Twój rachunek: </p>
                <form>
                    <label className="label__BillCard" for="form__input-amount">Wysokość rachunku</label>
                    <input className="form__items" type="text" id="form__input-amount" name="amount" placeholder="amount..." onChange={this.handleChange}/><br/>
                    <label className="label__BillCard" for="form__select">Wybierz wysokość napiwku</label>
                    <select className="form__items" name="tip" id="cars" onChange={this.handleChange}>
                        <option value=""> -- wybierz -- </option>
                        <option value="0.05">5%</option>
                        <option value="0.10">10%</option>
                        <option value="0.15">15%</option>
                        <option value="0.20">20%</option>
                    </select> <br />
                    <button className="btn__BillCard" type="submit">Przelicz</button>
                </form>
            </section>
         );
    }
}

export default SectionCard;