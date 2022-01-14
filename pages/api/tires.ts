/* eslint-disable import/no-anonymous-default-export */
import prisma from "../../lib/prisma"

export default async (req: any, res: any) => {
    if (req.method === "PUT") {
        const body = await JSON.parse(req.body)
        const post = await prisma.walkAround.update({
          where: {
            id: body.id
          },
            data: { 
                fl: parseInt(body.fl),
                fr: parseInt(body.fr),
                rl: parseInt(body.rl),
                rr: parseInt(body.rr),
                rl2: parseInt(body.rl2),
                rr2: parseInt(body.rr2),
                tireBrand: `${body.brand}`,
                size: `${body.size}`,
                tirePartNumber: `${body.partNumber}`
          },
        })
        res.status(200)
        res.end();
    }
}