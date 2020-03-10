import React, {Component} from 'react';
import './DisplayContainer.css';

class DisplayContainer extends Component{
    render(){
            return(
            <div className="grid-item grid-item-double-all input">
                {this.props.children}
            </div>
        );
    }
}

export default DisplayContainer;