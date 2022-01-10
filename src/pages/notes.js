import { notes } from "../utils/notes.model";

function Notes() {
  return (
    <div >
      {notes.map((note) => {
        const { title, content, author } = note;
        return (
          <div className="note">
            <div className="title">{title}</div>
            <div className="content">{content}</div>
            <div className="author"><span className="author-text" >Author - </span> {author}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Notes;
