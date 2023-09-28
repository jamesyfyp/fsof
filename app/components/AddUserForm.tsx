"use client";
import {experimental_useFormStatus as useFormStatus} from 'react-dom'
import {experimental_useFormState as useFormState} from 'react-dom'
import { useState, useEffect } from "react";

export default function ClientForm({ serverAction, shops }: any) {
  const {pending} = useFormStatus()
  const [input, setInput] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);
  const [shop, setShop] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="p-4 border-2 border-r-8 border-b-8 border-white rounded-md">
        <h1 className="w-full">Add User</h1>
    <form
      action={serverAction}
      onSubmit={() => {
        setInput("");
      }}
      className="border-white rounded-md  w-[400px] m-auto"
    >
      {buttonDisable && (
        <p className="text-sm pt-[5px] text-red-500">
          Error: {error}
        </p>
      )}
      <div className='flex gap-2'>
        <div className="grid grid-rows-2 w-[200px] mb-4">
          <label className="text-sm align-text-bottom">user email:</label>
          <input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
            className="text-black w-[180px] rounded-md text-sm"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="grid grid-rows-2 w-[200px] mb-4">
          <label className="text-sm ">
          Select a shop:
          </label>
          <select id="group" defaultValue={shops[0]} name="group" required className="rounded-md w-auto text-sm text-black ">
            {shops.map((shop: string, i: number) => {
              return (
                <option className="text-black " key={i} value={`${shop}`}>
                  {shop}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <button
        disabled={buttonDisable}
        aria-disabled={pending}
        className="  text-center w-min  border-2 border-r-4 border-b-4 p-2 border-white rounded-md  bg-black align-center hover:bg-green-700 disabled:text-grey-600 disabled:line-through"
        type="submit"
      >
        add
      </button>
    </form>
    </div>
  );
}
