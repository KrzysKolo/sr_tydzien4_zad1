import React from 'react';
const Select = ({ value, handleChange}) => {
    const options=[
        {
            id: 0,
            value: 0,
            name: "- tip -",
        },
        {
            id: 1,
            value: 0.05,
            name: "5%",
        },
        {
            id: 2,
            value: 0.10,
            name: "10%",
        },
        {
            id: 3,
            value: 0.15,
            name: "15%",
        },
        {
            id: 4,
            value: 0.20,
            name: "20%",
        },
    ];
    const option = options.map( item => <option key={item.id} value={item.value}>{item.name}</option> );

    return (
        <>
            <label className="label__BillCard-funkcyjny" htmlFor="form__select">Wybierz wysokość napiwku</label>
            <select className="form__items"
                        name="tip"
                        id="form__select"
                        onChange={handleChange}
                        value={value}>
                            {option}
            </select> <br />
        </>
     );
}

export default Select;