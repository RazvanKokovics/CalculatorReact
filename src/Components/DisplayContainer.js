import React, {Component} from 'react';
import './DisplayContainer.css';

class DisplayContainer extends Component{
    propTypes = {
        children : this.propTypes.children
    }
    render(){
            return(
            <div className="grid-item grid-item-double-all input">
                {this.props.children}
            </div>
        );
    }
}

export default DisplayContainer;