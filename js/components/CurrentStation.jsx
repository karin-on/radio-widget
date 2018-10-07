import React from 'react';

import stations from '../../data/stations.js';


class CurrentStation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let currStationName = stations[this.props.currStation].name;

        return <div className="current-station">
            <h4 className="current-station__title">Currently playing</h4>
            <span className="current-station__name">{currStationName}</span>
        </div>
    }
}

export {CurrentStation};