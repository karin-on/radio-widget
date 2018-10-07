import React from 'react';

import {CurrentStation} from "./CurrentStation.jsx";

class Footer extends React.Component {
    render() {
        return <div className="widget__footer">
            <CurrentStation chosenStation={this.props.chosenStation}
                            isStationActive={this.props.isStationActive}/>
        </div>
    }
}

export {Footer};