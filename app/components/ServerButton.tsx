"use client";
import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/20/solid";

export default function ServerButton({ shop, action }: any) {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-2 m-2 border-2 rounded-lg hover:cursor-pointer justify-evenly flex">
      {shop}
      <XCircleIcon
        onClick={() => setOpen(true)}
        className="h-6 w-6 ml-2 mt-[2.5px]"
      />
      <dialog className="w-[400px] h-[400px] " open={open}>
        <XCircleIcon
          onClick={() => setOpen(false)}
          className="h-6 w-6 ml-2 mt-[2.5px]"
        />
        <form action={action}>
          <input defaultValue={shop} id="GroupName" name="GroupName"></input>
          <button type="submit" className="text-sm p-2 m-2 border-2 rounded-md">
            confirm
          </button>
        </form>
      </dialog>
    </div>
  );
}
