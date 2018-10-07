import React from 'react';

import stations from '../../data/stations.js';


class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            currStation: -1,
            isStationActive: false
        }
    }

    handleClick = (e, i) => {

        if (i === this.state.currStation) {
            this.setState({
                currStation: i,
                isStationActive: !this.state.isStationActive
            });
            if (typeof this.props.printActiveStation === 'function') {
                this.props.printActiveStation(i, !this.state.isStationActive);
            }
        } else {
            this.setState({
                currStation: i,
                isStationActive: true
            });
            if (typeof this.props.printActiveStation === 'function') {
                this.props.printActiveStation(i, true);
            }
        }
    };


    render() {
        let panelClass = this.state.isStationActive ?
                        'list-item__control-panel --active':
                        'list-item__control-panel';


        let stationList = stations.map((el, i) => {
            return <li className="station-list__item" key={i}>
                <div className={this.state.currStation === i ?
                                panelClass :
                                'list-item__control-panel'}>
                    <button className="control-panel__minus-btn"></button>
                    <span className="control-panel__img"></span>
                    <button className="control-panel__plus-btn"></button>
                </div>
                <div className="list-item__head" onClick={e => this.handleClick(e, i)}>
                    <span className="list-item__name">
                        {el.name}
                    </span>
                    <span className="list-item__freq">{el.freq}</span>
                </div>
            </li>
        });


        return <div className="widget__body">

            <ul className="station-list">
                {stationList}
            </ul>

        </div>
    }
}

export {Body};