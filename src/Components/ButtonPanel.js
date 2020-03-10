import React, {Component} from 'react'
import PropTypes from "prop-types";
import Button from "./Button";
import ButtonContainer from "./ButtonContainer";
import { FaArrowRight, FaArrowLeft, FaUndo, FaRedo} from "react-icons/fa";
import "./ButtonPanel.css";


class ButtonPanel extends Component{
    static propTypes = {
        clickHandler: PropTypes.func,
    };
    
    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
    };

    render(){
        let hideShowButton;
        
        const firstButtonsSimple = [
            {id:2, name: "+/-", style: 'grey1'},
            {id:3, name: "%", style: 'grey1'},
            {id:4, name: "/", style: ''},
        ];

        const buttons = [
            {id:5, name: "7", style: 'grey2'},
            {id:6, name: "8", style: 'grey2'},
            {id:7, name: "9", style: 'grey2'},
            {id:8, name: "x", style: ''},
            {id:9, name: "4", style: 'grey2'},
            {id:10, name: "5", style: 'grey2'},
            {id:11, name: "6", style: 'grey2'},
            {id:12, name: "-", style: ''},
            {id:13, name: "1", style: 'grey2'},
            {id:14, name: "2", style: 'grey2'},
            {id:15, name: "3", style: 'grey2'},
            {id:16, name: "+", style: ''},
            {id:17, name: "0", style: 'grey2 double left '},
            {id:18, name: ".", style: 'grey2'},
            {id:19, name: "=", style: ''},
            
        ];

        if(this.props.extended === false){
            hideShowButton = <Button clickHandler={() => this.handleClick("show")} name="" key="50" class="grid-item btn grey1"><FaArrowRight/></Button> ;
            return(
                <div className="button-panel">
                    {hideShowButton}

                    {firstButtonsSimple.map((button) => <Button name={button.name} clickHandler={() => this.handleClick(button.name)} key={button.id} class={"grid-item btn " + button.style}/>)}
                
                    {buttons.map((button) => <Button name={button.name} clickHandler={() => this.handleClick(button.name)} key={button.id} class={"grid-item btn " + button.style}/>)}
                </div>
            );
        }
        else{
            hideShowButton = <Button clickHandler={() => this.handleClick("hide")} name="" key="50" class="grid-item btn grey1"><FaArrowLeft/></Button> ;
            return(
                <div className="button-panel">
                    {hideShowButton}
                    <ButtonContainer class="two-button-container">
                        <Button clickHandler={() => this.handleClick("Undo")} name="Undo" class="grid-item small-button btn grey1"><FaUndo/></Button>
                        <Button clickHandler={() => this.handleClick("Redo")} name="Redo" class="grid-item small-button btn grey1"><FaRedo/></Button>
                    </ButtonContainer>
                    <ButtonContainer class="two-button-container">
                        <Button clickHandler={() => this.handleClick("AC")} name="AC" class="grid-item small-button btn grey1"></Button>
                        <Button clickHandler={() => this.handleClick("+/-")} name="+/-" class="grid-item small-button btn grey1"></Button>
                    </ButtonContainer>
                    <ButtonContainer class="four-button-container">
                        <Button clickHandler={() => this.handleClick("(")} name="(" class="grid-item small-button btn"></Button>
                        <Button clickHandler={() => this.handleClick(")")} name=")" class="grid-item small-button btn"></Button>
                        <Button clickHandler={() => this.handleClick("%")} name="%" class="grid-item small-button btn"></Button>
                        <Button clickHandler={() => this.handleClick("/")} name="/" class="grid-item small-button btn"></Button>
                    </ButtonContainer>
                    {buttons.map((button) => <Button name={button.name} clickHandler={() => this.handleClick(button.name)} key={button.id} class={"grid-item btn " + button.style}/>)}
                </div>
            );
        }
        
    }
}

export default ButtonPanel