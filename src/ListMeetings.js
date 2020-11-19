import "./ListMeetings.css";
import Search from "./Search.js";
import Meeting from "./Meeting.js";

function ListMeetings(props) {
  return (
    <div className="list-meetings">
      <div className="list-meetings-top">
        <Search />
      </div>
      <ol className="meeting-list">
        {props.meetings.map((meeting, index) => (
          <Meeting meeting={meeting} key={index} />
        ))}
      </ol>
    </div>
  );
}

export default ListMeetings;
