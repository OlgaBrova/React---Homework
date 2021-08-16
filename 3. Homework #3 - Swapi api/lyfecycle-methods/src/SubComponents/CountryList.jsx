import React from 'react';
import PropTypes from 'prop-types';

export default class CountryList extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            'people': props.people,
            'total': null,
            'next': null,
            'previous': null,
            'renderPeopleDetails': true,
            'currentId': ''
        }

    }


    componentDidUpdate(prevProps, prevState) {

        if(prevState.renderPeopleDetails === false && prevState.currentId !== '' ) {
            alert('Loading Details');

            setTimeout(() => {
                alert('Details Loaded')
            }, 1000)
        }
    }


    fetchSwapiPeople = async () => {
        const response = await fetch('https://swapi.dev/api/people');
        const formatedResponse = await response.json();
        this.setState({
            'people': formatedResponse.results,
            'total': formatedResponse.count,
            'next': formatedResponse.next,
            'previous': formatedResponse.previous
        })
    }

    handlePeopleDetails = event => {
        this.setState({
            renderPeopleDetails: !this.state.renderPeopleDetails,
            currentId: event.target.id

        }, ()=> console.log(this.state.renderPeopleDetails, this.state.currentId)
    )}


    render () {
        console.log('RENDERINGGG.......')
        
        return(
            <div>
                <h3>TOTAL: {this.props.total}</h3>
                <ul>

                {
                    this.props.people.map(person => (
                        <>
                            <li  style={ this.state.currentId === person.name ? { color:'red', background: 'papayawhip'} : {color : 'black'}} >

                                { person.name } 
                    
                                <button id={person.name}
                                    onClick={this.handlePeopleDetails}
                                    >
                                    {this.state.renderPeopleDetails && this.state.currentId === person.name ? 'HIDE DETAILS' : 'SHOW DETAILS'}
                                </button>
                            </li>

                            
                            {this.state.renderPeopleDetails && this.state.currentId === person.name &&
                            <React.Fragment>
                                <table className="tableSwapi">
                                    <tr>
                                        <th>Name</th>
                                        <th>Height</th>
                                        <th>Mass</th>
                                        <th>Gender</th>
                                        <th>Hair color</th>
                                        <th>Skin color</th>
                                        <th>Birth year</th>
                                    </tr>
                                    <tr>
                                        <td>{person.name}</td>
                                        <td>{person.height}</td>
                                        <td>{person.mass}</td>
                                        <td>{person.gender}</td>
                                        <td>{person.hair_color}</td>
                                        <td>{person.skin_color}</td>
                                        <td>{person.birth_year}</td>
                                    </tr>
                                </table>
                            </React.Fragment>
                        }


                        </>
                              
                    )) 
                }
                            
                </ul>
                
            </div>
            
        )
        
    }
}

// Setting default value for people if its not send from the parent
CountryList.defaultProps = {
    people: []
}

// setting the types for the props that we excpect
CountryList.propTypes = {
    people: PropTypes.array,
    total: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onCountryDelete: PropTypes.func,

}