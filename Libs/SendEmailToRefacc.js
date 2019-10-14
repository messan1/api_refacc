const nodemailer = require ('nodemailer');

module.exports = SendMailToRefacc = (users, type) => {
  const AccounterSender = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: "infinitycenter@zoho.com",
        pass: "20102011Naruto"
    }
  });
  

  var content = '';
  for (const [key, value] of Object.entries (users)) {
    content = content + `<h3><li>${key} : ${value}</li></h3> <br/>`;
  }
  var html = `
  <h1>Inscription pour les JFAC 2020 ( ${type} )</h1>
  <ul>
    ${content}
  </ul>
  `;

  const option = {
    from: 'Le site du REFACC <infinitycenter@zoho.com>',
    to: `climatrefacc@gmail.com,infinity.soft@aol.com`,
    subject: 'Les Inscription Pour les JFAC 2020',
    text: content,
    html: html,
  };
  AccounterSender.sendMail (option, function (error, info) {
    if (error) {
      console.log (error);
    } else {
      console.log ('Email sent: ' + info.response);
    }
  });
};