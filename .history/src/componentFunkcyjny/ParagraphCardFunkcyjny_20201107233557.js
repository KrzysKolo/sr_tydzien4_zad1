import React from 'react';
const ParagraphCardFunkcyjny = (props) => {
    return (
        <section className="billCard__section billCard__section--background">
            <p>
                Twój rachunek: {props.result} zł
            </p>
        </section>
     );
}

export default ParagraphCardFunkcyjny;