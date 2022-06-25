import React from 'react'

export default function ManagerDash() {
  return (
    <div className='flex flex-row'>
      <div className='basis-1/5 'style={{backgroundColor:"#D4D4D4",height:"580px"}}>
      <button type='button' className='mt-4  p-2 text-center rounded-2xl ml-2  h-12 bg-gradient-to-r from-yellow-400 to-yellow-200 hover:from-yellow-500 hover:to-yellow-300' style={{width:"230px"}}>
          <Link to="/Map">Nearest dustbin</Link>
          </button>
          <button type='button' className='mt-4  p-2 text-center rounded-2xl ml-2  h-12 bg-gradient-to-r from-yellow-400 to-yellow-200 hover:from-yellow-500 hover:to-yellow-300' style={{width:"230px"}}>
          <Link to="/">Nearest dustbin</Link>
          </button>
          <button type='button' className='mt-4  p-2 text-center rounded-2xl ml-2  h-12 bg-gradient-to-r from-yellow-400 to-yellow-200 hover:from-yellow-500 hover:to-yellow-300' style={{width:"230px"}}>
          <Link to="/">Nearest dustbin</Link>
          </button>
          <button type='button' className='mt-4  p-2 text-center rounded-2xl ml-2  h-12 bg-gradient-to-r from-yellow-400 to-yellow-200 hover:from-yellow-500 hover:to-yellow-300' style={{width:"230px"}}>
          <Link to="/">Nearest dustbin</Link>
          </button>
          <button type='button' className='mt-4  p-2 text-center rounded-2xl ml-2  h-12 bg-gradient-to-r from-yellow-400 to-yellow-200 hover:from-yellow-500 hover:to-yellow-300' style={{width:"230px"}}>
          <Link to="/">Nearest dustbin</Link>
          </button>

      </div>
      <div className='basis-4/5'>
           
      </div>
  </div>
  )
}
