/* eslint-disable import/no-anonymous-default-export */
import { Magic } from "@magic-sdk/admin";
import Iron from "@hapi/iron"
import prisma from "../../lib/prisma"
import CookieService from '../../lib/cookie'

let magic: any 

export default async (req: any, res: any) => {
  if (req.method !== "POST") return res.status(405).end();

  if(!magic){
      magic = new Magic(process.env.MAGIC_SECRET_KEY)
  };

    //get user info from magic

    const user = await magic.users.getMetadataByToken(
        magic.utils.parseAuthorizationHeader(req.headers.authorization)
    );
    
    //check if user exists

    let priUser = await prisma.user.findUnique({
        where: {
            issuer_email: {
              issuer: `${user.issuer}`,
              email: `${user.email}`,
            },
        },
    });

    //if no user add user

    if (priUser == null) {
        const newUser = await prisma.user.create({          
            data : {
                issuer: `${user.issuer}`, 
                email: `${user.email}`,
                company: "none",
                role: "none",
            },
        });

        priUser = newUser

    } 

    //mmmmmm cookies

    const token = await Iron.seal( 
        user, 
        process.env.ENCRYPTION_SECRET, 
        Iron.defaults
    );
    
    CookieService.setTokenCookie(res, token, priUser);
    
    
    res.end();
} 