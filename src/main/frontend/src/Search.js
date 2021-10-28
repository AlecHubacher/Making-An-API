import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React from "react";

class SearchBar extends React.Component {

    _handleKeyPress(e) {
        if(e.key === 'Enter') {
            console.log("the enter key has been pressed")
        }
    }

    render() {
        return (
            <div className="search-box">
                <input onKeyPress={this._handleKeyPress} type="text" className="search-txt" name="" placeholder="Search Endpoints"/>
                <a className="search-btn" href="#">
                    <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                </a>
            </div>

        // <input type="text" onKeyPress={this._handleKeyPress} />

        );
    }
};

export default SearchBar;