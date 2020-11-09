import React from 'react';
const ParagraphCardFunkcyjny = ({result}) => {
    return (
        <section className="billCard__section billCard__section--background">
            <p>
                Twój rachunek: {result} zł
            </p>
        </section>
     );
}

export default ParagraphCardFunkcyjny;