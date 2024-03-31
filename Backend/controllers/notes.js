import Note from "../models/notes.js";

const addNote = async (req, res) => {
    const { title, content } = req.body;
    try {

        // Check for title and content
        if(!title || !content){
            throw new Error("Title or content are required");
        }

        const note = await Note.create({
            title: title,
            content: content
        });

        // Check for note whether it is successfully saved into the database or not
        if(!note){
            throw new Error("Failed to create note");
        }
        res.json({success: true, message: "Note added successfully", note: note});

    } catch (error) {
        console.error("Error adding note:", error);
        let errorMessage = error.message || "Something went wrong";
        res.status(500).json({ success: false, message: errorMessage });
    }
}

const getNote = async (req, res) => {
    try {
        const notes = await Note.findAll();
        if(!notes) {
            throw new Error("Error while fetching the notes");
        }
        res.json({ success: true, notes: notes });

    } catch (error) {
        console.log("Error while fetching notes:", error);
        let errorMessage = error.message || "Something went wrong";
        res.status(500).json({ success: false, message: errorMessage });

    }
}

const deleteNote = async (req, res) => {
    const noteId = req.params.noteId;
    try {
        const note = await Note.findByPk(noteId);
        if(!note){
            throw new Error('Error occured while fetching the note');
        }

        await note.destroy();
        res.json({ success: true, message: 'Note deleted successfully' });
        
    } catch (error) {
        console.log("Error while deleting the note:", error);
        let errorMessage = error.message || "Something went wrong";
        res.status(500).json({ success: false, message: errorMessage });
    }
}

export {addNote, getNote, deleteNote};

