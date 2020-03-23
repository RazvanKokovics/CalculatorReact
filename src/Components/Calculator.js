import React, {Component} from 'react';
import DisplayContainer from "./DisplayContainer";
import './Calculator.css';
import ContainerForm from "../containers/ContainerForm";
import ContainerDisplay from '../containers/ContainerDisplay';
import ContainerHistory from '../containers/ContainerHistory';
import ContainerExpressions from '../containers/ContainerExpressions';
import ContainerButtonPanel from '../containers/ContainerButtonPanel';
import {setDisplay} from '../actions';
import {store} from '../store';

class Calculator extends Component{

    componentDidMount(){
        //document.addEventListener("keydown", this.keyPressed);
    }

    componentWillUnmount(){
        //document.removeEventListener("keydown", this.keyPressed);
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
		store.dispatch(setDisplay(keyName));
    }

    render(){
        return(
            <main className="calculator">
                <DisplayContainer>
                    <ContainerHistory/>
                </DisplayContainer>
                <DisplayContainer>
                    <ContainerDisplay/>
                </DisplayContainer>
                <ContainerButtonPanel/>
                <ContainerExpressions/>
                <ContainerForm/>
            </main>
      );
    }
  }

export default Calculator;