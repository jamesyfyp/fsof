'use client'
import { ArrowPathIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export default function SubmitButton({disabled} : any) {
  const { pending } = useFormStatus()
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