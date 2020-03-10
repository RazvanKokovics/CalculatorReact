import React, {Component} from 'react'

class ButtonContainer extends Component{
    static propTypes = {
        class: PropTypes.string,
        children: PropTypes.children
    }

    render(){
        return (
            <div className={"grid-item " + this.props.class}>
                {this.props.children}
            </div>
        );
    }
}

export default ButtonContainer;