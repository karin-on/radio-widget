import React from 'react';

import {Header} from './Header.jsx';
import {Body} from './Body.jsx';
import {Footer} from './Footer.jsx';


class Widget extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            currStation: -1,
            isStationActive: false
        }
    }

    printActiveStation = (i, isActive) => {
        this.setState({
            currStation: i,
            isStationActive: isActive
        });
    };

    render() {
        return <div className="widget">
            <Header />
            <Body printActiveStation={this.printActiveStation}/>
            <Footer currStation={this.state.currStation}
                    isStationActive={this.state.isStationActive}/>
        </div>
    }
}

export {Widget};