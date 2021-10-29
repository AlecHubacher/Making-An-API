import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from "react";
import Event from "./Events";


class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: 'TEST JSON'
        }

        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

     _handleKeyPress(e) {
        if(e.key === 'Enter') {
            console.log("enter has been pressed");
            let line = e.target.value;
            console.log(line);
            this.setState({
                data: 'NEW TEST JSON OMGGG IT WO RKED'
            })
            // {<StudentProfiles></StudentProfiles>}
        }
    }

    render() {
        return (
            <div className="jsonandsearch">
                <div className="search-box">
                    <input onKeyPress={this._handleKeyPress} type="text" className="search-txt" name="" placeholder="Search Endpoints"/>
                    <a className="search-btn" href="#">
                        <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                    </a>
                </div>
                <div className="jsonresponsebox">
                    <h1>{this.state.data}</h1>
                </div>
            </div>

        // <input type="text" onKeyPress={this._handleKeyPress} />

        );
    }
};

export default SearchBar;