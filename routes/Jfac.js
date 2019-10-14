const Route = require ('express').Router ();
const Experts = require ('../controllers/expertsController');
const Exposants = require ('../controllers/exposantsController');
const Participants = require ('../controllers/ParticipantsController');
const Presses = require ('../controllers/pressesController');
const Contact = require ('../controllers/ContactControllers');


Route.post ('/experts',Experts);
Route.post ('/exposants',Exposants);
Route.post ('/participants',Participants);
Route.post ('/presses',Presses);
Route.post('/contact',Contact)

module.exports = Route;
