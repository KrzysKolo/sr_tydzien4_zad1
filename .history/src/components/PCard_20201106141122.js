import React from 'react';
const PCard = (props) => {
    return (
        <section className="billCard__section">
            Twój rachunek wynosi {props.result}
        </section>
     );
}

export default PCard;