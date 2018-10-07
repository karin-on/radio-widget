import React from 'react';

import {Widget} from './Widget.jsx';


class Container extends React.Component {
    render() {
        return <div className="page-wrapper">
            <div className="container">
                <Widget />
            </div>
        </div>
    }
}

export {Container};