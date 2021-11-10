import { password } from "@hapi/iron";

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        EMAIL_PASSWORD: string,
        EMAIL: string,
        MAGIC_PUBLISHABLE_KEY: string, 
        MAGIC_SECRET_KEY: string,
        ENCRYPTION_SECRET: password
      }
    }
  }