import nodemailer from 'nodemailer';

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6797c726f7777c",
    pass: "0ff6fbda8e7fff"
  }
});

export default transport;
