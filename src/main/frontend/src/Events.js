import React, {Component} from "react";
import StudentProfiles from "./APICalls";
class Event extends Component {

    static _handleKeyPress(e) {
        if(e.key === 'Enter') {
            console.log("enter has been pressed");
            let line = e.target.value;
            console.log(line);
            // {<StudentProfiles></StudentProfiles>}
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            message: 'Welcome visitor'
        }
    }

    render() {
        return (
            <div className="testingclass">
                <h1>{this.state.message}</h1>
            </div>
        )
    }

}

export default Event;