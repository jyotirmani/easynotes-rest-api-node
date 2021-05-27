module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');
    const api_prefix = '/api';

    // Create a new Note
    app.post(api_prefix+'/notes', notes.create);

    // Retrieve all Notes
    app.get(api_prefix + '/notes', notes.findAll);

    // Retrieve a single Note with noteId
    app.get(api_prefix + '/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put( api_prefix + '/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete(api_prefix + '/notes/:noteId', notes.delete);
}