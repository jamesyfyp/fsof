"use client";
import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence  } from "framer-motion";

export default function ServerButton({ shop, action }: any) {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <button className="p-1 border-2 border-r-4 border-b-4 text-sm rounded-lg hover:cursor-pointer flex hover:bg-red-700" onClick={() => setOpen(true)}>
        <p className="align-middle">{shop}</p>
        <XCircleIcon
        className="h-6 w-6 ml-2"
      />
      </button>
      <AnimatePresence>
        { open && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} 
            className="absolute top-0 left-0 w-full h-full bg-slate-900/80">
            <motion.dialog 
              initial={{y:200, opacity: 0 }}
              animate={{y:0, opacity: 1 }}
              exit={{ y:200, opacity: 0 }} 
              className="absolute top-20 w-[400px]  h-[340px] rounded-lg border-red-600 border-2 border-b-8 border-r-8" open={open}>
            <XCircleIcon
              onClick={() => setOpen(false)}
              className="absolute right-1 top-1 h-6 w-6 "
            />
              <form
                onSubmit={() => {
                  setOpen(false);
                }}
                action={action}
                className="border-0 rounded-lg"
              >
                <input
                  className="hidden"
                  readOnly={true}
                  value={shop}
                  id="GroupName"
                  name="GroupName"
                />
                <p className="m-4 mb-0 pb-0 p-4 text-center text">
                  Are you sure you want to remove this group?
                </p>
                <p className="m-4 p-4 text-center underline text-2xl font-black text-red-500">{shop}</p>
                <button
                  type="submit"
                  className="text-sm font-black p-2 w-[326px] mx-8 border-2 border-r-4 border-b-4 border-black rounded-md hover:bg-green-600 hover:underline"
                >
                  confirm
                </button>
                <div
                  className="text-sm font-black text-center p-2 m-2 mx-8 border-2 border-r-4 border-b-4 border-black rounded-md hover:bg-red-600 hover:cursor-pointer hover:underline"
                  onClick={()=>{setOpen(false)}}
                >
                  cancel
                </div>
              </form>
            </motion.dialog>
          </motion.div>
          
        )}
        
        
      </AnimatePresence>
    </div>
  );
}
