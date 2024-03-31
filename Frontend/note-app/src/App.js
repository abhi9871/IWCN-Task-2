import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AddNote from './components/Note/AddNote';
import NoteList from './components/Note/NoteList';
import { addNote, getNote, deleteNote } from './services/notesApi';

const App = () => {
  const [notes, setNotes] = useState('');

  // Fetching the notes
  const fetchNotes = async () => {
    try {
        const response = await getNote();
        setNotes(response.notes);
    } catch (error) {
        console.log(error);
    }
}

  // Adding the note
  const addNoteHandler = async (noteObj) => {
    try {
      const response = await addNote(noteObj);
      if(response.success){
        setNotes((prevNotes) => [...prevNotes, response.note]);
         // Show success toast
         toast.success(response.message);
      } else {
        // Show error toast
        toast.error(response.message);
      }
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };


    // Deleting the note
    const deleteNoteHandler = async (noteId) => {
      try {
          const response = await deleteNote(noteId);
          if(response.success){
            toast.success(response.message);
            await fetchNotes();
          } else {
            toast.error(response.message);
          }
      } catch (error) {
        console.log('Error while deleting the note:', error);
      }
    }

  useEffect(() => {
     fetchNotes();
  }, []);

  return (
    <>
    <Header />
    <AddNote addNoteHandler={addNoteHandler} />
    <NoteList notes={notes} deleteNoteHandler={deleteNoteHandler} />
    <Footer />
    <ToastContainer />
    </> 
  );
}

export default App;
