import React, { Component } from 'react';
class SectionCard extends Component {
    state = {  }
    render() {
        return (
            <section>
                <p>Twój rachunek: </p>
                <form>
                    <label className="label__BillCard" for="form__input-amount">Wysokość rachunku</label>
                    <input type="text" id="form__input-amount" name="amount" placeholder="amount..." /><br/>
                    <label for="form__select">Wybierz wysokość napiwku</label>
                    <select name="tip" id="cars">
                        <option value="">-- wybierz --</option>
                        <option value="5">5%</option>
                        <option value="10">10%</option>
                        <option value="15">15%</option>
                        <option value="20">20%</option>
                    </select> <br />
                    <button type="submit">Przelicz</button>
                </form>
            </section>
         );
    }
}

export default SectionCard;