import "./ListMeetings.css";
import Search from "./Search.js";
import Meeting from "./Meeting.js";
import { Component } from "react";

class ListMeetings extends Component {
  state = {
    query: "",
  };

  updateQuery = (query) => {
    this.setState({ query });
    console.log(this.state.query);
  };

  render() {
    return (
      <div className="list-meetings">
        <div className="list-meetings-top">
          <Search query={this.state.query} updateQuery={this.updateQuery} />
        </div>
        <ol className="meeting-list">
          {this.props.meetings.map((meeting, index) => (
            <Meeting
              meeting={meeting}
              key={index}
              onDeleteMeeting={this.props.onDeleteMeeting}
            />
          ))}
        </ol>
      </div>
    );
  }
}

export default ListMeetings;
