import React, { Component } from 'react';
class SectionCard extends Component {
    state = {  }
    render() {
        return (
            <section>
                <form>
                    <label for="form__input-amount">Wysokość rachunku</label>
                    <input type="text" id="form__input-amount" name="amount" placeholder="amount..." />
                    <label for="form__select">Wybierz wysokość napiwku</label>
                    <select name="tip" id="cars">
                        <option value="">-- wybierz --</option>
                        <option value="5">5%</option>
                        <option value="10">10%</option>
                        <option value="15">15%</option>
                        <option value="20">20%</option>
                    </select>
                </form>
            </section>
         );
    }
}

export default SectionCard;