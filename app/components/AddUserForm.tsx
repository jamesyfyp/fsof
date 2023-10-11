"use client";
import { experimental_useFormState as useFormState, experimental_useFormStatus as useFormStatus } from 'react-dom'
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import { useState } from "react";
import SubmitButton from './FormComponents/SubmitButton';

const initialState = {
  message: null,
  input: ''
}

export default function ClientForm({ serverAction, shops }: any) {
  const [state, formAction] = useFormState(serverAction, initialState)
  const {pending} = useFormStatus()
  const [input, setInput] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);
  const [shop, setShop] = useState("");
  const [error, setError] = useState("");

  function errorState() {
    setButtonDisable(false);
    setError("")
  }

  return (
    <div className="p-4 border-2 border-r-8 border-b-8 border-white rounded-md">
        <h1 className="w-full">Add User</h1>
    <form
      action={formAction}
      onSubmit={() => {
        setInput("");
      }}
      className="border-white rounded-md  w-[400px] m-auto"
    >
      <div className='flex gap-2'>
        <div className="grid grid-rows-2 w-[200px">
          <label className="text-sm align-text-bottom">User Email:</label>
          <input
            onChange={(e) => {
              errorState();
              setInput(e.target.value);
            }}
            value={input}
            className="text-black w-[180px] rounded-md text-sm"
            id="email"
            onInvalid={(e)=>{
              e.preventDefault();
              setError("invalid email format");
              setButtonDisable(true);
            }}
            name="email"
            type='email'
            required
          />
        </div>
        <div className="grid grid-rows-2 w-[200px]">
          <label className="text-sm">
          Shop:
          </label>
          <select id="group" defaultValue={shops[0]} name="group" required className="rounded-md w-auto text-sm text-black">
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
      <div className='grid grid-cols-3 gap-2 '>
        <SubmitButton disabled={buttonDisable}/>
        {(buttonDisable || state.status) && (
          <p className='border-2 border-red-600 border-r-4 border-b-4 rounded-md bg-red-600/20 col-span-2 my-4 p-2 py-4 ml-2 text-sm text-red-600  flex'> <ExclamationCircleIcon className='h-4 w-4 mt-[.5px]'/><span className='w-2'/>{state?.message ? state?.message : error}</p>
        )}   
        
      </div>
    </form>
    </div>
  );
}
