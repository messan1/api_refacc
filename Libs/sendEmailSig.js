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
    html: users.html,
    attachments:[
      {
        filename:"La plaquette des JFAC 2020",
        path:'./Libs/plaquette.pdf'
      },
      {
        filename:"JFAC 2020 note conceptuelle",
        path:'./Libs/tdr.doc'
      }
    ]
  }
  AccounterSender.sendMail(option,function(error,info){
    if(error){
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
}