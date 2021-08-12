import React, { Component } from 'react';
import CustomInput from './CustomInput';
import CountryList from './CountryList';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            country: '',
            countries: [],
            newName: ''
        }

    }

    changeCountryName = event => {
        this.setState({
            country: event.target.value
        })
    }

    addCountryName () {
        const { country, countries } = this.state;
        if (country.length > 0 ) {
            this.setState({
                country: '',
                countries: [...countries, {id: countries.length + 1, value: country, editable: false}]
            })
        } else {
            alert('YOU SHOULD INPUT A NOT EXISTING COUNTRY INSIDE THE INPUT FIELD');
        }

    }

    deleteCountry = countryName => {
        this.setState({
            countries: this.state.countries.filter(country => country !== countryName)
        })
    }


    editCountry = (countryId) => {
       
        const countries = this.state.countries.map(country => country.id === countryId ? { ...country, 'editable': true } : country);
      
        this.setState({
            countries
            
        }, (()=> console.log(countries)
        ))
    }


    giveCountryNewName = event => {
        this.setState({
            newName: event.target.value

        }, (()=> console.log(this.state.newName)
        ))
    }

    saveCountryName = (countryId) => {

        if (this.state.newName.length > 0 ) {

            const countries = this.state.countries.map(country => country.id === countryId ? { ...country, 'value': this.state.newName, 'editable': false } : country);

            this.setState({
                countries,
                newName: ''

            }, (()=> console.log(countries)
            ))

        } else {
            alert('YOU SHOULD INPUT A NEW COUNTRY NAME');
        }
       
    }


    render() {
        return (
            <div>
                <CustomInput
                    countryName={this.state.country}
                    onNameChange={ this.changeCountryName }
                />
                <button onClick={this.addCountryName.bind(this)}>Add Country</button>
                <hr/>
                <CountryList countries={this.state.countries} onCountryDelete={ this.deleteCountry } onCountryEdit={this.editCountry} onCountrySave={this.saveCountryName} newNameValue={this.state.newName} changeNameNow={ this.giveCountryNewName }/>
            
            </div>
        )
    }
}

export default Home;