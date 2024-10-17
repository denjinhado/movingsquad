const nodemailer = require("nodemailer");
require("dotenv").config();


const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.email",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.USER,
      pass: process.env.APP_PASSWORD,
    },
  });
  const mailOptions = {
    from:{
        name: 'Moving Squad',
        address: process.env.USER
    },
    to: ['themovingsquadsd@gmail.com'],
    subject:"The Moving Squad - Inquiry",
    text: "HEllo"
  }
  const sendMail = async () => {
    try{
        await transporter.sendMail()
        console.log('se envio')
    }
    catch(error){
        console.log(error)
    }
  }