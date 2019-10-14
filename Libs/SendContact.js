const nodemailer = require ('nodemailer');

module.exports = SendMailToRefaccContact = (infosign) => {


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
  for (const [key, value] of Object.entries (infosign)) {
    content = content + `<h3><li>${key} : ${value}</li></h3> <br/>`;
  }
  var html = `
  <h4>Formulaire de contact REFACC.COM</h4>
  <ul>
    ${content}
  </ul>
  `;

  const option = {
    from: 'REFACC.COM formulaire de contact <infinitycenter@zoho.com>',
    to: `climatrefacc@gmail.com,infinity.soft@aol.com`,
    subject: 'Formulaire de contact',
    text: content,
  };
  AccounterSender.sendMail (option, function (error, info) {
    if (error) {
      console.log (error);
    } else {
      console.log ('Email sent: ' + info.response);
    }
  });
};