import React, {Component} from 'react';
import Display from "./Display";
import DisplayContainer from "./DisplayContainer";
import History from "./History";
import ButtonPanel from "./ButtonPanel";
import ExpressionsPanel from "./ExpressionsPanel";
import calculate from "../service/calculate";

import './Calculator.css';

class Calculator extends Component{
    state = {
        total: null,
        result: false,
        history:"History: ",
        operationString:"",
        extended:false,
        expressions:[
            {id: 0, string: "5+3"},
            {id: 1, string: "12*6"},
            {id: 2, string: "90/3*4"},
        ],
        expressionsCounter: 3,
    };

    handleClick = buttonName => {
        if(buttonName === "hide")
            this.setState({extended:false});
        else{
            if(buttonName === "show")
                this.setState({extended:true});
            else
                this.setState(calculate(this.state, buttonName));
        }
    };

    componentDidMount(){
        document.addEventListener("keydown", this.keyPressed);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.keyPressed);
    }

    keyPressed = event => {
       // console.log(event.key);
        if(event.shiftKey && event.key === "+")
            this.setState(calculate(this.state, "+"))
        if(event.shiftKey && event.key === "*")
            this.setState(calculate(this.state, "*"))
        if(event.shiftKey && event.key === "(")
            this.setState(calculate(this.state, "("))
        if(event.shiftKey && event.key === ")")
            this.setState(calculate(this.state, ")"))
        if(event.key === "/")
            this.setState(calculate(this.state, "/"))
        if(event.key === "-")
            this.setState(calculate(this.state, "-"))
        if(event.keyCode === 13)
        this.setState(calculate(this.state, "="))
        if("0123456789=".includes(event.key)){
            //console.log(event.key);
            this.setState(calculate(this.state, event.key));
        }
    }

    handleExpressionClick = expressionString => {
        this.setState({operationString: expressionString, result:false});
    };

    handleGarbageClick = expressionId => {
        let filtered = this.state.expressions.filter(function(expression) { return expression.id !== expressionId; });
        this.setState({expressions: filtered});
    }

    render(){
        return(
            <main className="calculator">
                <DisplayContainer>
                    <History value={this.state.history}/>
                </DisplayContainer>
                <DisplayContainer>
                    <Display value={this.state.operationString || this.state.total || "0"}/>
                </DisplayContainer>
                <ButtonPanel extended={this.state.extended} clickHandler={this.handleClick}/>
                <ExpressionsPanel expressions={this.state.expressions} clickHandler={this.handleExpressionClick} garbageHandler={this.handleGarbageClick}/>
            </main>
      );
    }
  }

export default Calculator;