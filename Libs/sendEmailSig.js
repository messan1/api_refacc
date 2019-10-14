const nodemailer = require("nodemailer")

module.exports = SendMail = (users) => {

  const AccounterSender = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: "infinitycenter@zoho.com",
        pass: "20102011Naruto"
    }
  });
  
  const option = {
    from:"Le REFACC <infinitycenter@zoho.com>",
    to: `${users.email}`,
    subject: "Inscription Pour les JFAC 2020",
    text: users.text,
    html: users.html
  }
  AccounterSender.sendMail(option,function(error,info){
    if(error){
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
}