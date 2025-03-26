import React from 'react'
type ErrorMessageProps = {
    message? : string 
}
export default function ErrorMessage({message}:ErrorMessageProps) {
  return (
    <span className='text-xs text-red-700'>{message ? message : null}</span>
  )
}
