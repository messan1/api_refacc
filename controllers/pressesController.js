const PresseModel = require("../models/presses");
const Mailer = require("../Libs/sendEmailSig")
const mailsDesign = require("../mails/mailTemplates")
const sendTorefacc = require("../Libs/SendEmailToRefacc");


module.exports = postPresses = async (req,res) =>{

  const user = new PresseModel({
    name:req.body.nom,
    agence:req.body.agence,
    email:req.body.email,
    contact:req.body.contact,
  })
  try {
    const saveduser = await user.save();
    res.send(saveduser);
    const users = {
      email:req.email,
      text:mailsDesign.presses.text,
      html:mailsDesign.presses.html,
    }
    Mailer(users)
    sendTorefacc(req.body,"Presses")
  } catch (error) {
    res.status(422).json({error:"Une erreur "})
  }
}