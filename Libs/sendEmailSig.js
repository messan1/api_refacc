const nodemailer = require("nodemailer")

module.exports = SendMail = (users) => {
  const AccounterSender = nodemailer.createTransport({
    service:"Gmail",
    auth:{
      user:"infinitytodev@gmail.com",
      pass:"20102011Naruto"
    }
  })

  const option = {
    from:"Le REFACC <climatrefacc@gmail.com>",
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