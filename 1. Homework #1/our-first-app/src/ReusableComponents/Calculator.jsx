import React from 'react';
import './Calculator.css';



class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            firstNumber: '',
            secondNumber: '',
            mathOperation: '',
            result: null
        }
    }

    changeFirstNumber = event => {
        this.setState({
            firstNumber: parseInt(event.target.value)
        })
    }

    changeSecondNumber = e => {
        this.setState({
            secondNumber: parseInt(e.target.value)
        })
    }

    chooseOperation = e => {
        this.setState({
            mathOperation: e.target.value,
        })

        console.log(this.state.mathOperation);
    }

    calculateNumbers = () => {

        //console.log(this.state.mathOperation);

        if (this.state.mathOperation === '+') {
            this.setState({
                result: this.state.firstNumber + this.state.secondNumber,
                firstNumber: '',
                secondNumber: ''
            })
        } else if (this.state.mathOperation === '-') {
            this.setState({
                result: this.state.firstNumber - this.state.secondNumber,
                firstNumber: '',
                secondNumber: ''
            })
        } else if (this.state.mathOperation === '*') {
            this.setState({
                result: this.state.firstNumber * this.state.secondNumber,
                firstNumber: '',
                secondNumber: ''
            })
        } else if (this.state.mathOperation === '/') {
            this.setState({
                result: this.state.firstNumber / this.state.secondNumber,
                firstNumber: '',
                secondNumber: ''
            })
        }
    } 


    render() {
        return (
            <React.Fragment>
                <div id="calcContainer">
                    <div id="selectDiv" >
                        <select onChange={this.chooseOperation} id="selectMenu">
                            <option >Choose Operation</option>
                            <option value="+" >Addition</option>
                            <option value="-" >Subtraction</option>
                            <option value="*" >Multiplication</option>
                            <option value="/" >Division</option>
                        </select>
                    </div>

                    <div id="numberInputs">
                        <label>First number</label>
                        <input value={this.state.firstNumber} onChange={this.changeFirstNumber} type='number' />
                        <input value={this.state.secondNumber} onChange={this.changeSecondNumber} type='number' />
                        <label>Second number</label>
                    </div>
                    <div>
                        <button onClick={this.calculateNumbers}>Calculate</button>
                    </div>
                    <div className="result">
                        {this.state.result}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Calculator;