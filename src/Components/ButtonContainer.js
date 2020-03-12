import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ButtonContainer extends Component{
    static propTypes = {
        class: PropTypes.string,
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