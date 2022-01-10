import { useState } from "react";
import { v4 as uuid } from "uuid";

function Form(props) {
  const [inputs, setInputs] = useState({
    id: new uuid(),
    title: "",
    content: "",
    author: "",
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div id="form">
      <input
        type="text"
        name="title"
        placeholder="Note title"
        onChange={handleChange}
      />
      <textarea
        type="text"
        name="content"
        placeholder="Note content"
        rows="4"
        cols="10"
        onChange={handleChange}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        onChange={handleChange}
      />

      <button type="submit" onClick={() => props.addNote(inputs)}>Add Note</button>
    </div>
  );
}
export default Form;
