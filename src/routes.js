/* eslint-disable linebreak-style */
const { addNoteHandler, getAllNotesHandler, getNotesFromId, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler');

/* eslint-disable linebreak-style */
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNotesFromId,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  }
];

module.exports = routes;