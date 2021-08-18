import React from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Fab from '@material-ui/core/Fab';
function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab
        onClick={() => {
          props.onCheck(props.id);
        }}
      >
        <DeleteForeverIcon />
      </Fab>
    </div>
  );
}

export default Note;
