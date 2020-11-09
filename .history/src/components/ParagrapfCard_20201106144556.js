import React from 'react';
const ParagrapfCard = (props) => {
    return (
        <section className="billCard__section">
            <p>
                Twój rachunek: {props.result} zł
            </p>
        </section>
     );
}

export default ParagrapfCard;