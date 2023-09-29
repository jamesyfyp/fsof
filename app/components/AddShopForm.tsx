"use client"
import { experimental_useFormState as useFormState, experimental_useFormStatus as useFormStatus } from 'react-dom'
import { ArrowPathIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid'
import {useState, useEffect} from 'react'


const initialState = {
  message: null,
  input: ''
}

function AddShopSubmitButton({disabled} : any) {
  const { pending } = useFormStatus()
  console.log(pending, disabled)
  return (
     <button
        className="row-span-1 border-2 rounded-md border-b-4 border-r-4 border-white block p-2 my-4 bg-black align-center hover:bg-green-700 disabled:text-gray-600 disabled:line-through disabled:hover:bg-red-600 active:bg-blue-500"
        type="submit"
        disabled={(pending || disabled)}
      >
        {pending ? <ArrowPathIcon className='animate-spin-slow h-8 w-6 mx-auto'/> : "add" }
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
      <div className='grid grid-cols-3 gap-2'>
        <AddShopSubmitButton disabled={buttonDisable}/> 
        <div className='flex text-red-600 col-span-2 mt-4 ml-2'>
          <ExclamationCircleIcon className='h-4 w-4 mt-[.5px]'/>
          <p className='text-sm text-red-600  '>{state?.message}{error}</p>
        </div>
        
      </div>
      
    </form>
  );
}
