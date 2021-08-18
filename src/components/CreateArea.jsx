import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {
  const [expand, setExpand] = useState(false)
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.addNote(note);
    event.preventDefault();
  }
  
  function expandBox(){
    setExpand(true);
  }
  return (
    <div>
      <form className="create-note">
        {expand && (<input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
          onClick={expandBox}
        />
        )}
        <textarea
          onClick={expandBox}
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take note..."
          rows={expand ? 3 : 1}
        />
        <Zoom in={expand}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
