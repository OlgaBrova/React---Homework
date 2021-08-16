import React, { Component } from 'react';
import CustomInput from './CustomInput';
import CountryList from './CountryList';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            country: '',
            countries: [],
            people: [{},{},{},{},{},{},{},{},{},{}],
            total: null,
            renderCountryList: true,
        }
    }

    componentDidMount() {
        this.fetchSwapiPeople();
    }
    

    fetchSwapiPeople = async () => {
        const response = await fetch(`https://swapi.dev/api/people`);
        const formatedResponse = await response.json();
        this.setState({
            people: formatedResponse.results,
            total: formatedResponse.count,
            next: formatedResponse.next,
            previous: formatedResponse.previous
        }, () => {
            console.log(this.state.next);
            console.log(this.state.previous);
        
        })
    }


    fetchSwapiPeopleNextPage = async () => {
        const response = await fetch(this.state.next);
        const formatedResponse = await response.json();
        this.setState({
            people: formatedResponse.results,
            total: formatedResponse.count,
            next: formatedResponse.next,
            previous: formatedResponse.previous
        }, () => {
            console.log(this.state.next);
            console.log(this.state.previous);
            
        })
    }  


    fetchSwapiPeoplePrevPage = async () => {
        const response = await fetch(this.state.previous);
        const formatedResponse = await response.json();
        this.setState({
            people: formatedResponse.results,
            total: formatedResponse.count,
            next: formatedResponse.next,
            previous: formatedResponse.previous
        })
    }  

    changeCountryName = event => {
        this.setState({
            country:event.target.value
        })
    }

    addCountryName () {
        const { country, countries } = this.state;
        if (country.length > 0 && !countries.some(currentCountry => currentCountry.toLowerCase() === country.toLocaleLowerCase())) {
            this.setState({
                country: '',
                countries: [...countries, country]
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

    handleCountryList = () => {
        this.setState({
            renderCountryList: !this.state.renderCountryList
        })
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
                
                    <CountryList
                        people={this.state.people}
                        total={this.state.total && this.state.total.toString()}
                    
                    />

                <hr/>
                
                <button onClick={this.fetchSwapiPeoplePrevPage} 
                style={ this.state.previous === null ? { display:'none'} : {display : 'inline-block'}}
                >Previous Page</button>

                <button onClick={this.fetchSwapiPeopleNextPage} 
                style={ this.state.next === null ? { display:'none'} : {display : 'inline-block'}} 
                >Next Page</button>
                
            </div>
        )
    }
}

export default Home;