import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [box, setBox] = useState([]);
  function addNote(note) {
    setBox((prevValue) => {
      return [...prevValue, note];
    });
  }
  function deleteNote(id) {
    setBox((prevItems) => {
      return prevItems.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {box.map((newNote, index) => (
        <Note
          key={index}
          id={index}
          title={newNote.title}
          content={newNote.content}
          onCheck={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
