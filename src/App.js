const meetings = [
  {
    _id: "5faf5ab7043e87536e31e54e",
    course: "EN.601.226 Data Structure",
    instructor: "Ali Madooei",
    time: "MWF 12:00 - 1:15 PM",
    link: "https://wse.zoom.us/j/91907049828",
  },
  {
    _id: "5faf5ab7043e87536e31e54f",
    course: "EN.601.226 Data Structure",
    instructor: "Ali Madooei",
    time: "MWF 1:30 - 2:45 PM",
    link: "https://wse.zoom.us/j/99066784665",
  },
  {
    _id: "5faf5ab7043e87536e31e550",
    course: "EN.601.280 Full-Stack JavaScript",
    instructor: "Ali Madooei",
    time: "TuTh 12:00 - 1:15 PM",
    link: "https://wse.zoom.us/j/93926139464",
  },
  {
    _id: "5faf5ab7043e87536e31e551",
    course: "EN.601.280 Full-Stack JavaScript",
    instructor: "Ali Madooei",
    time: "TuTh 1:30 - 2:45 PM",
    link: "https://wse.zoom.us/j/91022779135",
  },
];

function App() {
  return <div style={{ color: "white" }}>{JSON.stringify(meetings)}</div>;
}

export default App;
