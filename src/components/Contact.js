import React from 'react'

export default function Contact() {
  return (
    <div>
      <h1>Welcome to Contact Page</h1>
      <form>
        <input 
           type="text"
           className='border border-black p-2 m-2'
           placeholder="name"/>
        <input type="text"
               className='border border-black p-2 m-2'
               placeholder="message"/>
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  )
}
