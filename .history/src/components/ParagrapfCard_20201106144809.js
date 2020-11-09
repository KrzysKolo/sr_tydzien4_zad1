import React from 'react';
const ParagrapfCard = (props) => {
    return (
        <section className="billCard__section billCard__section--background">
            <p>
                Twój rachunek: {props.result} zł
            </p>
        </section>
     );
}

export default ParagrapfCard;