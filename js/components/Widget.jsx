import React from 'react';

import {Header} from './Header.jsx';
import {Body} from './Body.jsx';
import {Footer} from './Footer.jsx';


class Widget extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            chosenStation: -1,
            isStationActive: false
        }
    }


    printActiveStation = (i, isActive) => {
        this.setState({
            chosenStation: i,
            isStationActive: isActive
        });
    };

    render() {
        return <div className="widget">
            <Header />
            <Body printActiveStation={this.printActiveStation}/>
            <Footer chosenStation={this.state.chosenStation}
                    isStationActive={this.state.isStationActive}/>
        </div>
    }
}

export {Widget};