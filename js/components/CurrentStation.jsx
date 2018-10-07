import React from 'react';


class CurrentStation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currStationName: ''
        }
    }

    render() {
        // console.log(this.props.chosenStation);
        // console.log(this.props.isStationActive);

        return <div className="current-station hidden">
            <h4 className="current-station__title">Currently playing</h4>
            <span className="current-station__name">Dribbble FM</span>
        </div>
    }
}

export {CurrentStation};