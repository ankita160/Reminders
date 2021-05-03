const nodemailer = require('nodemailer');
const cron = require('node-cron');
 

 
    const mailOptions = {
        from: 'ankitabiswas6499@gmail.com' ,
        to: 'ankitabiswas0604@gmail.com', // Recepient email address. Multiple emails can send separated by commas
        subject: 'subjectline',
        text: 'Description'
    };

    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: 'ankitabiswas6499@gmail.com', //Gmail username
            pass: 'PASSWORD' // Gmail password
        }
    });
 
cron.schedule('*/2 * * * *', () => {
    transporter.sendMail(mailOptions, (error, info) => {
       if (error) {
           return console.log(error);
    }
       console.log('Message sent: ' + info.response);
    });
});

