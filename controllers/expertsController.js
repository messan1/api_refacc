const ExpertsModels = require("../models/experts");
const Mailer = require("../Libs/sendEmailSig")
const mailsDesign = require("../mails/mailTemplates")
const sendTorefacc = require("../Libs/SendEmailToRefacc");

module.exports = postExpert = async (req,res) =>{

  const user = new ExpertsModels({
    name:req.body.nom,
    atelier:req.body.atelier,
    email:req.body.email,
    contact:req.body.contact,
  })
  try {
    const saveduser = await user.save();
    res.send(saveduser);
    const users = {
      email:req.body.email,
      text:mailsDesign.expert.text,
      html:mailsDesign.expert.html,
    }
    Mailer(users)
    sendTorefacc(req.body,"Experts")
  } catch (error) {
    res.status(422).json({error:"Une erreur "})
  }
}