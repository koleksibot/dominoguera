let express = require('express')
let app = express()
let cors = require('cors')
let bodyParser = require('body-parser')
require('dotenv').config()
const mailgun = require("mailgun-js");
const DOMAIN = 'YOUR_DOMAIN_NAME';
const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.DOMAIN});
app.use(bodyParser.json())
app.use(cors())
app.options('*', cors())
app.post('/email', (req, res, next) => {
    console.log(req.body)
        let mailOptions = {
            from: req.body.Nombres + ' <haciendaladominguera@gmail.com>',
            to: 'haciendaladominguera@gmail.com',
            subject: 'contact form',
            text: req.body.Telefono + ' '+req.body.CorreoElectronico+' '+req.body.Mensaje
        }
        mg.messages().send(mailOptions, (error, body) => {
            if(error){
                console.log(error)
            }
            else{
                console.log(body)
            }
            //res.json({msg : "send"})
          });
})

const PORT = 8080

app.listen(PORT,'0.0.0.0')
console.log(`Runing on http://0.0.0.0:${PORT}`)