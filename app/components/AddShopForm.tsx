"use client"
import { experimental_useFormState as useFormState, experimental_useFormStatus as useFormStatus } from 'react-dom'
import { ArrowPathIcon } from '@heroicons/react/20/solid'
import {useState, useEffect} from 'react'


const initialState = {
  message: null,
  input: ''
}

function AddShopSubmitButton() {
  const { pending } = useFormStatus()
 
  return (
     <button
        className=" border-2 rounded-md border-b-4 border-r-4 border-white block p-2 my-4 bg-black align-center hover:bg-green-700 disabled:text-gray-600 disabled:line-through"
        type="submit"
      >
        {pending ? <ArrowPathIcon className='animate-spin-slow h-8 w-6 mx-2'/> : "add" }
      </button>
  )
}

export default function ServerForm({ serverAction, shops }: any) {
  const [input, setInput] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setButtonDisable(false);
    shops.map((shop: any) => {
      if (input.toLowerCase() == shop.toLowerCase()) {
        setButtonDisable(true);
        setError("Shop already exists!");
      }
      if (input.includes(" ")) {
        setButtonDisable(true);
        setError("No spaces! useCapitalsLikeThis or _");
      }
    });
  }, [input]);
    
  const [state, formAction] = useFormState(serverAction, initialState)
  return (
    <form
      action={formAction}
      className="rounded-md border-2 border-r-8 border-b-8 w-min border-white p-4"
      onSubmit={()=>{setInput('')}}
    >
      <h1 className="w-full mb-2">Add Shop</h1>
      <input
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        type="text"
        className="text-black rounded-md"
        id="GroupName"
        name="GroupName"
        required
      />
      <>
      <AddShopSubmitButton /> 
      <p className='text-sm '>{state?.message}</p>
      </>
      
    </form>
  );
}
