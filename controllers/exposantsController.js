const ExposantModel = require("../models/exposants");
const Mailer = require("../Libs/sendEmailSig")
const mailsDesign = require("../mails/mailTemplates")
const sendTorefacc = require("../Libs/SendEmailToRefacc");

module.exports = postExposants = async (req,res) =>{

  const user = new ExposantModel({
    name:req.body.nom,
    structure:req.body.structure,
    email:req.body.email,
    contact:req.body.contact,
  })
  try {
    const saveduser = await user.save();
    res.send(saveduser);
    const users = {
      email:req.email,
      text:mailsDesign.exposant.text,
      html:mailsDesign.exposant.html,
    }
    Mailer(users)
    sendTorefacc(req.body,"Exposants")
  } catch (error) {
    res.status(422).json({error:"Une erreur "})
  }
}