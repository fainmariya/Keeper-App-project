import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
const [notes, setNotes]= useState([]);
  function addNote(note){
    
    setNotes(prev=>{
     return [...prev, note]}
    )
  }
  function deleteNote(id){
setNotes(prev =>{
  console.log("delete")
  return prev.filter((n,index)=>{
  return index!==id
})
  }
)
  }
  return (
            <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((n,index)=>{
        return (
        <Note 
        key={index} 
        id={index}
        
        title={n.title}
        content={n.content} 
        onDelete={deleteNote}/>
        );
        })}
      
      <Footer />
    </div>
  );
}

export default App;
