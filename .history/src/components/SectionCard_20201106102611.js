import React, { Component } from 'react';
class SectionCard extends Component {
    state = {  }
    render() {
        return (
            <section>
                <form>
                    <label for="form__input-amount">Wysokość rachunku</label>
                    <input id="form__input-amount" name="amount" placeholder="amount..." />
                </form>
            </section>
         );
    }
}

export default SectionCard;