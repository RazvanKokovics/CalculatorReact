import React, {Component} from 'react';
import Display from "./Display";
import DisplayContainer from "./DisplayContainer";
import History from "./History";
import ButtonPanel from "./ButtonPanel";
import ExpressionsPanel from "./ExpressionsPanel";
import './Calculator.css';
import Form from "./Form";
import {store} from '../store';
import {setDisplay} from '../actions';

class Calculator extends Component{

    handleClick = buttonName => {
		store.dispatch(setDisplay(store.getState(), buttonName));
    };

    componentDidMount(){
        document.addEventListener("keydown", this.keyPressed);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.keyPressed);
    }

    keyPressed = event => {
		let keyName;
        if(event.shiftKey && event.key === "+")
            keyName = "+";
        if(event.shiftKey && event.key === "*")
			keyName = "*";
        if(event.shiftKey && event.key === "(")
			keyName = "(";
        if(event.shiftKey && event.key === ")")
			keyName = ")";
        if(event.key === "/")
			keyName = "/";
        if(event.key === "-")
			keyName = "-";
        if(event.keyCode === 13)
			keyName = "=";
        if("0123456789=".includes(event.key))
			keyName = event.key;
		store.dispatch(setDisplay(store.getState(), keyName));
    }

    handleExpressionClick = expressionString => {
        this.setState({operationString: expressionString, result:false});
    };

    handleGarbageClick = expressionId => {
        let filtered = this.state.expressions.filter((expression) => { return expression.id !== expressionId; });
        this.setState({expressions: filtered});
    }

    handleOpen = () => {
        this.setState({loggedin : true});
        document.removeEventListener("keydown", this.keyPressed);
    };
  
    handleClose = () => {
        this.setState({loggedin : false});
        document.addEventListener("keydown", this.keyPressed);
    };

    render(){
        return(
            <main className="calculator">
                <DisplayContainer>
                    <History value={store.getState().calculation.history}/>
                </DisplayContainer>
                <DisplayContainer>
                    <Display value={store.getState().calculation.operationString || store.getState().calculation.total || "0"}/>
                </DisplayContainer>
                <ButtonPanel extended={store.getState().extended} clickHandler={this.handleClick}/>
				
                <ExpressionsPanel expressions={store.getState().calculation.expressions} clickHandler={this.handleExpressionClick} garbageHandler={this.handleGarbageClick}/>
                <Form opened={store.getState().loggedin} openHandler={this.handleOpen} closeHandler={this.handleClose}/>
				
			</main>
      );
    }
  }

export default Calculator;