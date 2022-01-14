/* eslint-disable import/no-anonymous-default-export */
import prisma from "../../lib/prisma"

export default async (req: any, res: any) => {
    if (req.method === "POST") {
        let id = 0
        const body = await JSON.parse(req.body)
        const post = await prisma.walkAround.create({
          data: { 
            vin: `${body.vin}`,
            mileage: parseInt(body.mileage),
            customer: `${body.customer}`,
          },
        }).then((res) => {
           id = res.id
        })
        res.status(200).json({id:id})
        res.end();
      }
      if (req.method === "PUT") {
        const body = await JSON.parse(req.body)
        const update = await prisma.walkAround.update({
          where: { 
            id: body.id
          },
          data:{
            eRatedCCA: parseInt(body.eRatedCCA),
            eCCA: parseInt(body.eCCA),
            eRatedVoltage: parseInt(body.eRatedVoltage),
            eVoltage: parseInt(body.eVoltage),
            brand: body.brand,
            partNumber: body.partNumber,
            nCCA: parseInt(body.nCCA),
            nVoltage: parseInt(body.nVoltage)
          }
        })
        res.status(200);
        res.end();
      }
  } 