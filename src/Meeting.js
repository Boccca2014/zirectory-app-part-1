import "./Meeting.css";

function Meeting(props) {
  const { meeting, key } = props;
  return (
    <li className="meeting-list-item" key={key}>
      <div className="meeting-details">
        <p className="title">{meeting.course}</p>
        <p>{meeting.instructor}</p>
        <p>{meeting.time}</p>
        <p>
          <a href={meeting.link}>{meeting.link}</a>
        </p>
      </div>
    </li>
  );
}

export default Meeting;
