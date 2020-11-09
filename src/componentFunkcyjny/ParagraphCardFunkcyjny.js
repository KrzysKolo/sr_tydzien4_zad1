import React from 'react';
const ParagraphCardFunkcyjny = (props) => {
    return (
        <section className="billCard__section-funkcyjny billCard__section-funkcyjny--background">
            <p>
                Twój rachunek: {props.result} zł
            </p>
        </section>
     );
}

export default ParagraphCardFunkcyjny;