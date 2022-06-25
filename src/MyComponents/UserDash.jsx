import React from 'react'
import { Link } from 'react-router-dom'
import Map from './Map'
export default function UserDash() {
  return (
  <div className='flex flex-row'>
      <div className='basis-1/5 'style={{backgroundColor:"#D4D4D4",height:"580px"}}>
      <button type='button' className='mt-4  p-2 text-center rounded-2xl ml-2  h-12 bg-gradient-to-r from-yellow-400 to-yellow-200 hover:from-yellow-500 hover:to-yellow-300' style={{width:"230px"}}>
          <Link to="/UserDash">Nearest dustbin</Link>
          </button>
          <button type='button' className='mt-4  p-2 text-center rounded-2xl ml-2  h-12 bg-gradient-to-r from-yellow-400 to-yellow-200 hover:from-yellow-500 hover:to-yellow-300' style={{width:"230px"}}>
          <Link to="/reward">Your Reward</Link>
          </button>
          

      </div>
      <div className='basis-4/5'>
            <Map/>
            
      </div>
  </div>
    )
}
