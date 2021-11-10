import React from "react"

export const user = {
    user: false,
    role: "none",
    company: "none",
    did: "none",
    email: "none",
    name: "none"
}


export const setUser = ( auth: boolean,role: string, company: string, did: string, email: string, name: string) => { 
    user.user = auth;
    user.role = role;
    user.company = company;
    user.did = did;
    user.email = email;
    user.name = name
}

export const userContext = React.createContext({ 
    user: user, 
    setUser: setUser
});
    