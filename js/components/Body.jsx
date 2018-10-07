import React from 'react';

const stations = [
    {
        name: "Putin FM",
        freq: "66,6"
    },
    {
        name: "Dribbble FM",
        freq: "101,2"
    },
    {
        name: "Doge FM",
        freq: "99,4"
    },
    {
        name: "Ballads FM",
        freq: "87,1"
    },
    {
        name: "Maximum FM",
        freq: "142,2"
    }
];



class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            chosenStation: -1,
            isStationActive: false
        }
    }

    handleClick = (e, i) => {
        // console.log(e.target);
        // console.log(i);

        this.setState({
            chosenStation: i,
            isStationActive: !this.state.isStationActive
        });

        if (typeof this.props.printActiveStation === 'function') {
            this.props.printActiveStation(i, !this.state.isStationActive);
        }

    };


    render() {
        // console.log(this.state.chosenStation);

        let activePanel = this.state.chosenStation;
        let panelClass = this.state.isStationActive ?
                        'list-item__control-panel --active':
                        'list-item__control-panel';


        let stationList = stations.map((el, i) => {
            return <li className="station-list__item" key={i}>
                <div className={this.state.chosenStation === i ?
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