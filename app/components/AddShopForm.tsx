"use client"
import { experimental_useFormState as useFormState, experimental_useFormStatus as useFormStatus } from 'react-dom'
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import {useState} from 'react'
import SubmitButton from './FormComponents/SubmitButton'


const initialState = {
  message: null,
  status: true,
  input: ''
}

export default function ServerForm({ serverAction, shops }: any) {
  const [state, formAction] = useFormState(serverAction, initialState)
  const [input, setInput] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);
  const [error, setError] = useState("");

  function errorState(e: React.ChangeEvent<HTMLInputElement>) {
    setButtonDisable(false);
    setError("")
    shops.map((shop: any) => {
      if (e.target.value == shop.toLowerCase()) {
        setButtonDisable(true);
        setError("Shop already exists!");
      }
      if (e.target.value.includes(" ")) {
        setButtonDisable(true);
        setError("No spaces! useCapitalsLikeThis or _");
      }
    });
  }
    
  return (
    <form
      action={formAction}
      className="rounded-md border-2 border-r-8 border-b-8 w-min border-white p-4"
      onSubmit={()=>{setInput('')}}
    >
      <h1 className="w-full mb-2">Add Shop</h1>
      <input
        value={input}
        onInvalid={(e)=>{
              e.preventDefault();
              setError("a valid input required");
              setButtonDisable(true);
            }}
        onChange={(e)=>{setInput(e.target.value);errorState(e)}}
        type="text"
        className="text-black rounded-md"
        id="GroupName"
        name="GroupName"
        required
      />
      <div className='grid grid-cols-3 gap-2'>
        <SubmitButton disabled={buttonDisable}/> 
        {(buttonDisable || !state.status) && (
          <p className='border-2 border-red-600 border-r-4 border-b-4 rounded-md bg-red-600/20 col-span-2 my-4 p-2 py-4 ml-2 text-sm text-red-600  flex'> <ExclamationCircleIcon className='h-4 w-4 mt-[.5px]'/><span className='w-2'/>{state?.message ? state?.message : error}</p>
        )}    
      </div>
      
    </form>
  );
}
