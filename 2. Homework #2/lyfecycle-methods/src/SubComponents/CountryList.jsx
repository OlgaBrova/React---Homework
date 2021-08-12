import React from 'react';
import CustomInput from './CustomInput';

export default class CountryList extends React.Component {
    

    render () {
        const { countries } = this.props;
        return(
            <ul>
                {
                    countries.map((country, index) => (
                        <li key={ index }>
                            { country.value }
                            <button onClick={ () => this.props.onCountryDelete(country) }>X</button>

                            {
                                !country.editable ?
                                <button onClick={ () => this.props.onCountryEdit(country.id) } >Edit</button>
                                : 
                                <React.Fragment>
                                    <CustomInput
                                        countryName={this.props.newNameValue}
                                        onNameChange={ this.props.changeNameNow }
                                    />

                                    <button onClick={() => this.props.onCountrySave(country.id)} >Save</button>
                                </React.Fragment>
                            }
                            
                        </li>
                    ))
                }
            </ul>
        )
    }
}