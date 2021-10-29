/* eslint-disable import/no-anonymous-default-export */
export default  function  (req: any, res: any) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    port: 587,     
    host: "smtp.gmail.com",
    secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      },
    });
    
    const mailData = {
        from: 'jp965052@gmail.com',
        to: 'james.g.phillips.91@gmail.com', 
        subject: `Message From ${req.body.data.firstName} ${req.body.data.lastName}`,
        text: req.body.data.message + " | Sent from: " + req.body.data.email,
        html: `
        <div>${req.body.data.companyName}</div>
        <div>${req.body.data.phoneNumber}</div>
        <div>${req.body.data.about}</div>
        <p>Sent from: ${req.body.data.email}</p>`
    }
  
    transporter.sendMail(mailData, function (err: any, info: any) {
        if(err)
          console.log(err)
        else
          console.log(mailData);
          res.send('success')
    })
  
    console.log(req.body)
    
}