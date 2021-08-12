import React from 'react';

const CustomInput = props => {
    const { onNameChange, countryName} = props;

    return (
        <input className='our-input' onChange={onNameChange} value={countryName} />
    )
}

export default CustomInput;