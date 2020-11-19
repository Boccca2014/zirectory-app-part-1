import "./ListMeetings.css";
import Search from "./Search.js";
import Meeting from "./Meeting.js";

function ListMeetings() {
  return (
    <div className="list-meetings">
      <div className="list-meetings-top">
        <Search />
      </div>
      <ol className="meeting-list">
        <Meeting />
      </ol>
    </div>
  );
}

export default ListMeetings;
