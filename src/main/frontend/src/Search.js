import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from "react";
import axios from "axios";
import JSONPretty from "react-json-pretty";

var JSONPrettyMon = require('react-json-pretty/dist/personalTheme');


class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            requestType: false,
            postname: "",
            postemail: "",
            postdob: "",
            postmajor: ""
        }

        this._handleKeyPress = this._handleKeyPress.bind(this);
        this._handleClick = this._handleClick.bind(this);
        this._handleTest = this._handleTest.bind(this);
    }

    // getCorrectDataState(myDate) {
    //     if
    // }

    _handleClick = (e) => {
        if(e.target.value === 'POST') {
            this.setState({
                requestIsPost: true,
                postname: "",
                postemail: "",
                postdob: "",
                postmajor: ""
            })
            if(this.state.requestIsPost) {
                console.log("state of requestIsPost is now: true");
            } else {
                console.log("state of requestIsPost is now: false");
            }
        }
        else {
            this.setState({
                requestIsPost: false,
            })
        }


        }

        _handleTest(e) {
            console.log(e.target.className);
        if(e.target.className === 'student-name-searchbox') {
            this.setState({
                postname: e.target.value,
            })
        } else if(e.target.className === 'student-email-searchbox') {
            this.setState({
                postemail: e.target.value,
            })
        } else if(e.target.className === 'student-dob-searchbox') {
            this.setState({
                postdob: e.target.value,
            })
        } else if(e.target.className === 'student-major-searchbox') {
            this.setState({
                postmajor: e.target.value,
            })
        }
    }

     _handleKeyPress(e) {
         if (e.key === 'Enter') {
             let line = e.target.value;
             if(this.state.requestIsPost) {
                 console.log("here is name"+this.state.postname)
                 console.log("here is email"+this.state.postemail)
                 console.log("here is dob"+this.state.postdob)
                 console.log("here is major"+this.state.postmajor)
             const options = {
                 method: 'POST',
                 headers: {'Content-Type': 'application/json'},
                 data: {
                     name: this.state.postname,
                     email: this.state.postemail,
                     dob: this.state.postdob,
                     major: this.state.postmajor
                 },
                 url: "http://localhost:8080/api/"+line
             };
             axios(options);

             } else {
                 axios.get("http://localhost:8080/api/"+line).then(res => {
                     this.setState( {
                         data: res.data
                     })
                 })
             }
         } else {

         }
     }

    render() {
        return (
            <div className="jsonandsearch">
                <div className="searchendpoint">
                    <div className="request-type">
                        <select onChange={e => this._handleClick(e)} className="request">
                            <option>GET</option>
                            <option>POST</option>
                        </select>
                    </div>
                    <div className="search-box">
                        <input onKeyPress={this._handleKeyPress} type="text" className="search-txt" name="" placeholder="Search Endpoints"/>
                        {/*<a className="search-btn" href="#">*/}
                        {/*    <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>*/}
                        {/*</a>*/}
                    </div>
                </div>
                {this.state.requestIsPost &&
                <div className="postrequestboxes">
                    <div className="student-name">
                        <p className="postfields">Name</p>
                        <input type="text" value={this.state.postname} onInput={this._handleTest} placeholder="Mina" className="student-name-searchbox"></input>
                    </div>
                    <div className="student-email">
                        <p className="postfields">Email</p>
                        <input type="text" value={this.state.postemail} onInput={this._handleTest} placeholder="mina@yahoo.com" className="student-email-searchbox"></input>
                    </div>
                    <div className="student-dob">
                        <p className="postfields">Date of Birth</p>
                        <input type="text" value={this.state.postdob} onInput={this._handleTest} placeholder="yyyy-mm-dd" className="student-dob-searchbox"></input>
                    </div>
                    <div className="student-major">
                        <p className="postfields">Major</p>
                        <input type="text" value={this.state.postmajor} onInput={this._handleTest} placeholder="Computer Science" className="student-major-searchbox"></input>
                    </div>
                    <span className="stretch"></span>
                </div>
                }
                <div className="jsonresponsebox">
                    <JSONPretty data={this.state.data} theme={JSONPrettyMon}></JSONPretty>
                </div>
            </div>

        );
    }
};

export default SearchBar;