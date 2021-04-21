const fs = require('fs');
const path = require('path');

function findById(id, notesArray) {
    return notesArray.filter(note => note.id === id)[0];
};

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    )

    return note;
};

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }

    return true;
};

function removeNote(id, notesArray) {
    let note = notesArray[parseInt(id)]
    
    notesArray.splice(parseInt(id), 1);

    let index = 0;
    notesArray.forEach(note => {
        note.id = `${index}`;
        index++;
    });
    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return note;
}

module.exports = { 
    findById,
    createNewNote,
    validateNote,
    removeNote
};