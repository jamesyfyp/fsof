/* eslint-disable import/no-anonymous-default-export */
import prisma from "../../lib/prisma"

export default async (req: any, res: any) => {
  if (req.method === "POST") {
    const body = await JSON.parse(req.body)
    const useVerification = await prisma.contactForm.create({
      data: { 
        firstName: `${body.firstName}`,
        lastName: `${body.lastName}`,
        CompanyName: `${body.CompanyName}`,
        PhoneNumber: `${body.PhoneNumber}`,
        userEmail: `${body.userEmail}`,
        message: ``
      },
    }).then((res) => JSON.stringify(res)).then(
      res.status(200)
    )
    res.end();
  }
  
  if (req.method === "GET") {
    const userVerificationGet = await prisma.contactForm.findMany({where: {
      timesContacted: 0
    }
  } 
    )
    res.status(200);
    res.json(userVerificationGet);
    res.end();
  }
  
  if (req.method === "PATCH") {
    let body = JSON.parse(req.body)
    let digit  =  Number(body.id)
    const userVerificationGet = await prisma.contactForm.update({
      where: {
        id: digit
      },
      data: {
        timesContacted: {
          increment: 1
        }
      }
    })
    res.status(200);
    res.json(userVerificationGet);
    res.end();
  }
  
  if (req.method === "DELETE") {
    let digit  = Number(req.body.id);
  const userVerificationDelete = await prisma.contactForm.delete({
      where: {
        id: digit
      }
    })
    res.status(200)
    res.end()
  }
 
} 

