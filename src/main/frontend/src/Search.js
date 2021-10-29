import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from "react";
import Event from "./Events";


class SearchBar extends React.Component {

    render() {
        return (
            <div className="search-box">
                <input onKeyPress={Event._handleKeyPress} type="text" className="search-txt" name="" placeholder="Search Endpoints"/>
                <a className="search-btn" href="#">
                    <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                </a>
            </div>

        // <input type="text" onKeyPress={this._handleKeyPress} />

        );
    }
};

export default SearchBar;