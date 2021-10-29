import React, {Component} from "react";
import StudentProfiles from "./APICalls";
class Event extends Component {

    render() {
        return (
            <div className="testingclass">
                <h1>{this.state.message}</h1>
            </div>
        )
    }

}

export default Event;