const ContactController = require("../models/contact");
const SendMailToRefaccContact = require("../Libs/SendContact")

module.exports = postContcat = async (req,res) =>{

  const user = new ContactController({
    name:req.body.name,
    object:req.body.object,
    email:req.body.email,
    message:req.body.message,
  })
  try {
    const saveduser = await user.save();
    res.send(saveduser);
    SendMailToRefaccContact(req.body)
  } catch (error) {
    res.status(422).json({error:"Une erreur "})
  }
}