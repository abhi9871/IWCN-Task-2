import express from 'express';
import { addNote as addNoteController } from "../controllers/notes.js";
import { getNote as getNoteController } from '../controllers/notes.js';
import { deleteNote as deleteNoteController } from '../controllers/notes.js';

const Noterouter = express.Router();

// Post route for adding note into the database
Noterouter.post('/add-note', addNoteController);

// Get route for fetching all the notes from the database
Noterouter.get('/get-notes', getNoteController);

// Delete route for deleting the note
Noterouter.delete('/delete-note/:noteId', deleteNoteController);

export default Noterouter;