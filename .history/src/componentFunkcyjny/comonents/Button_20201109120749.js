import React from 'react';
const Button = ({handleConvert, result}) => {
    return (
        <button className="btn__BillCard-funkcyjny" type="submit" onClick={handleConvert}>Przelicz</button>
     );
}

export default Button;