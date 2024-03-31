import axios from 'axios';

// Adding a note into the database
export const addNote = async(note) => {
    try {
        const response = await axios.post('http://localhost:5000/notes/add-note', note);
        return response.data;
    } catch (error) {
        console.log(error.response);
        return error.response.data;
    }
}

// Fetching all the notes from the database
export const getNote = async() => {
    try {
        const response = await axios.get('http://localhost:5000/notes/get-notes');
        return response.data;
    } catch (error) {
        console.log(error.response);
        return error.response.data;
    }
}

// Deleting a note from the database
export const deleteNote = async(noteId) => {
    try {
        const response = await axios.delete(`http://localhost:5000/notes/delete-note/${noteId}`);
        return response.data;
    } catch (error) {
        console.log(error.response);
        return error.response.data;
    }
}

