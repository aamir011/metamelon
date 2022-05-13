import React, {Component} from 'react';
import Headers from "./common/header";
import Footers from "./common/footers";
class Layout extends Component {
    componentDidMount() {
        console.log('I was triggered during componentDidMount')
      }
    
    render() {
        return (
            <>
                <Headers/>
                {this.props.children}
                <Footers/>
            </>
        );
    }
}

export default Layout;
