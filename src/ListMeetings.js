import "./ListMeetings.css";
import Search from "./Search.js";
import Meeting from "./Meeting.js";
import { Component } from "react";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";

class ListMeetings extends Component {
  state = {
    query: "",
  };

  updateQuery = (query) => {
    this.setState({ query });
    console.log(this.state.query);
  };

  render() {
    const query = this.state.query.trim();
    let meetings = [];
    if (query) {
      const match = new RegExp(escapeRegExp(query), "i");
      meetings = this.props.meetings.filter(
        (m) =>
          match.test(m.course) || match.test(m.instructor) || match.test(m.time)
      );
    } else {
      meetings = this.props.meetings;
    }

    meetings.sort(sortBy("course"));

    return (
      <div className="list-meetings">
        <div className="list-meetings-top">
          <Search query={this.state.query} updateQuery={this.updateQuery} />
        </div>
        <ol className="meeting-list">
          {meetings.map((meeting, index) => (
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
