import Form from "../components/form";
import NavBar from "../components/navbar";
import { notes } from "../utils/notes.model";
import {useNavigate} from "react-router-dom";

function AddNote() {

    const navigate = useNavigate();
  const addNote = (note) => {
    //console.log(note);
    notes.push(note);
    console.log(notes);

    setInterval(()=>{
        navigate("/");
    },1000)
    
    
  };
  return (
    <>
      <NavBar title="Notes App" />
      <div className="form-card">
        <p className="add-note">Add a Note</p>
        <Form addNote={addNote} />
      </div>
    </>
  );
}

export default AddNote;
