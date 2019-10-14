const nodemailer = require ('nodemailer');

module.exports = SendMailToRefaccContact = (infosign) => {
  const AccounterSender = nodemailer.createTransport ({
    service: 'Gmail',
    auth: {
      user: 'johnbambino379@gmail.com',
      pass: '48069804',
    },
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
    from: 'Le site du REFACC (Nous contacter) <infinitytodev@gmail.com>',
    to: `messanchristian@hotmail.com,infinity.soft@aol.com`,
    subject: 'Formulaire de contact',
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