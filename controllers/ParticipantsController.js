const ParticipantModel = require ('../models/participants');
const Mailer = require ('../Libs/sendEmailSig');
const mailsDesign = require ('../mails/mailTemplates');
const sendTorefacc = require("../Libs/SendEmailToRefacc");

module.exports = postParticipants = async (req, res) => {

  const user = new ParticipantModel ({
    name: req.body.nom,
    pays: req.body.pays,
    ville: req.body.ville,
    participation: req.body.participation,
    email: req.body.email,
    contact: req.body.contact,
  });
  try {
    const saveduser = await user.save ();
    res.send (saveduser);
    const usersmail = {
      email: req.body.email,
      text: mailsDesign.participant.text,
      html: mailsDesign.participant.html,
    };
    Mailer (usersmail);
    sendTorefacc(req.body,"Participants")
  } catch (error) {
    res.status (422).json ({error: 'Une erreur '});
  }
};
