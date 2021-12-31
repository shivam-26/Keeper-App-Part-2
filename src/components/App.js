import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((text) => (
        <Note key={text.key} title={text.title} description={text.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
