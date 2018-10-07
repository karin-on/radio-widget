import React from 'react';


class Header extends React.Component {
    render() {
        return <div className="widget__header">
            <button className="header__back-btn"></button>
            <h1 className="header__title">Stations</h1>
            <button className="header__switch-btn"></button>
        </div>
    }
}

export {Header};