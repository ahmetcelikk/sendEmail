const nodemailer = require("nodemailer");

let transport = nodemailer.createTransport({
  sevice: "gmail",
  auth: {
    user: "test@gmail.com",
    pass: "pasword",
  },
});
let mailOption = {
  from: "test@gmail.com",
  to: "test_to@gmail.com",
  subject: "test",
  html: "<h1>test mail</h1>",
};
transport.sendMail(mailOption, (err, data) => {
  if (err) console.log(err);
  else console.log("mail send succesfuly");
});
