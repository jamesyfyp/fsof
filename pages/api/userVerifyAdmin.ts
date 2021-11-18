/* eslint-disable import/no-anonymous-default-export */
import { ifError } from "assert";
import data from "../../lib/data";
import prisma from "../../lib/prisma"

export default async (req: any, res: any) => {
   
  if (req.method === "GET") {
    const userVerificationGet = await prisma.userVerifyForm.findMany()
    res.status(200),
    res.json(userVerificationGet)
    res.end();
  }
  
  if (req.method === "DELETE") {
    let digit  = Number(req.body);
    
  const userVerificationDelete = await prisma.userVerifyForm.delete({
      where: {
        id: digit
      }
    })
    res.status(200)
    res.end()
  }

  if (req.method === "PATCH") {
  let info = JSON.parse(req.body)
    
  const userVerificationAproval = await prisma.user.update({
      where: {
        issuer_email:{
          issuer: info.did,
          email: info.email
        }
      },
      data:{
        type: info.type,
        role: info.role,
        company: info.company
      }
  });
  
    res.status(200)
    res.end()
  }

}