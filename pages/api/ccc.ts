/* eslint-disable import/no-anonymous-default-export */
import prisma from "../../lib/prisma"

export default async (req: any, res: any) => {
    if (req.method === "POST") {
        const body = await JSON.parse(req.body)
        const useVerification = await prisma.cCC.create({
          data: { 
            complaint: `${body.complaint}`,
            cause: `${body.cause}`,
            correction: `${body.correction}`,
            walkAroundId: body.id
          },
        }).then((res) => {
        })
        res.status(200)
        res.end();
      }
  } 