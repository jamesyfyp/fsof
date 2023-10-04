"use client"
import React, {useCallback, useState, useEffect, Key} from 'react'
import {useDropzone} from 'react-dropzone'
import Image from "next/image"

function Preview ({files}: any) {
    return(
        <>
            {files.map((file: any, i: Key) => {
               return(
                <div key={i}>
                        <iframe
                            className='h-[1000px] w-full'
                            src={file.preview}
                        >
                    </iframe>
                </div>
               ) 
            })}
        </>
    )
}

export default function DragAndDrop() {
    const [files, setFiles] : any = useState([]);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: {
      'application/pdf': ['.pdf']
    },
    onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
        }
    })
    useEffect(() => {
        return () => files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    }, []);
    
    return (
        <div>
            <div>
                {files.length == 0 && (
                    <div className='border-2 w-[400px] h-[200px] border-b-4 border-r-4 p-8 my-auto rounded-md hover:cursor-pointer hover:bg-gray-900 flex items-center justify-center'>
                        <div {...getRootProps()}>
                        <input {...getInputProps()} />
                            {
                                isDragActive ?
                                <p className='text-sm m-auto text-center'>Drop the files here ...</p> :
                                <p className='text-sm m-auto text-center'>Drag 'n' drop an invoice here, or click to select files</p>
                            }
                        </div>
                    </div>
                )}
            </div>
            {files.length >= 1 && (
                <Preview files={files}/>
            )}
        </div>   
    )
}
