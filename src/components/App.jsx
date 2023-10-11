import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";
function App() {
  const newNote = notes.map((note) => (
    <Note key={note.key} title={note.title} content={note.content} />
  ));
  return (
    <div>
      <Header />
      {newNote}
      <Footer />
    </div>
  );
}

export default App;
