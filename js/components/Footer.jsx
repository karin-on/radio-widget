import React from 'react';

import {CurrentStation} from "./CurrentStation.jsx";

class Footer extends React.Component {
    render() {
        return <div className="widget__footer">
            {this.props.isStationActive ?
                <CurrentStation currStation={this.props.currStation}
                                isStationActive={this.props.isStationActive}/> :
                null}
        </div>
    }
}

export {Footer};