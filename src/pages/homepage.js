import NavBar from "../components/navbar";
import Form from "../components/form";
import { notes } from "../utils/notes.model";
import Notes from "./notes";
function Homepage() {
  const addNote = (note) => {
    //console.log(note);
    notes.push(note);
    console.log(notes);
  };
  return (
    <>
      <NavBar title="Notes App" />

      {/* <div className="form-card">
        <p className="add-note">Add a Note</p>
        <Form addNote={addNote} />
      </div> */}
      <div>
        <Notes />
      </div>
    </>
  );
}
export default Homepage;
