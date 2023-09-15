"use client";
import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

export default function ServerButton({ shop, action }: any) {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-2 m-2 border-2 rounded-lg hover:cursor-pointer justify-evenly flex">
      {shop}
      <XCircleIcon
        onClick={() => setOpen(true)}
        className="h-6 w-6 ml-2 mt-[2.5px]"
      />
      <motion.dialog className="w-[400px]  h-[340px] rounded-lg" open={open}>
        <XCircleIcon
          onClick={() => setOpen(false)}
          className="absolute right-2 top-2 h-6 w-6 "
        />
        <form
          onSubmit={() => {
            setOpen(false);
          }}
          action={action}
        >
          <input
            className="hidden"
            readOnly={true}
            value={shop}
            id="GroupName"
            name="GroupName"
          />
          <p className="m-4 p-4 text-center">
            Are you sure you want to remove this group?
          </p>
          <p className="m-4 p-4 text-center text-red-500">{shop}</p>
          <button
            type="submit"
            className="text-sm font-black p-2 w-[380px] mx-[10px] border-2 rounded-md hover:bg-slate-100"
          >
            confirm
          </button>
          <div
            onClick={() => {
              setOpen(false);
            }}
            className="text-sm font-black text-center p-2 m-2 border-2 rounded-md hover:bg-slate-100"
          >
            cancel
          </div>
        </form>
      </motion.dialog>
    </div>
  );
}
