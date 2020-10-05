const express = require('express')
const nodemailer = require("nodemailer");
const app = express()


// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    //host: "smtp.ethereal.email",
    //port: 587,
    //secure: false, // true for 465, false for other ports
    service: "gmail",
    auth: {
        user: "bohdankorolbk@gmail.com", // generated ethereal user
        pass: "06011996Bk", // generated ethereal password
    },
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3001, () => {
    console.log(`Example app listening at http://localhost:${3001}`)
})


app.get('/sendMassage', async function (req, res) {
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'Test Mail from server', // sender address
        to: "bogdankorolbk@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        //text: "Hello world?", // plain text body
        html: "<b>Hello it is test massage from server</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    res.send('Hello World!')

})
