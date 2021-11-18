/* eslint-disable import/no-anonymous-default-export */
import prisma from "../../lib/prisma"

export default async (req: any, res: any) => {
   
    if (req.method !== "POST") return res.status(405).end();
    const body = await JSON.parse(req.body)
    console.log(body)
    const useVerification = await prisma.userVerifyForm.create({
        data: { 
                firstName: `${body.firstName}`,
                lastName: `${body.lastName}`,
                CompanyName: `${body.CompanyName}`,
                PhoneNumber: `${body.PhoneNumber}`,
                userEmail: `${body.userEmail}`,
                userDID: `${body.userDID}`
        },
    })
   
    res.end();
  } 