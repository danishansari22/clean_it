import React from 'react'
import { PaperClipIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

export default function Reward() {
  return (
    <div className='flex flex-row'>
    <div className='basis-1/5 'style={{backgroundColor:"#D4D4D4",height:"580px"}}>
    <button type='button' className='mt-4  p-2 text-center rounded-2xl ml-2  h-12 bg-gradient-to-r from-yellow-400 to-yellow-200 hover:from-yellow-500 hover:to-yellow-300' style={{width:"230px"}}>
        <Link to="/UserDash">Nearest dustbin</Link>
        </button>
        <button type='button' className='mt-4  p-2 text-center rounded-2xl ml-2  h-12 bg-gradient-to-r from-yellow-400 to-yellow-200 hover:from-yellow-500 hover:to-yellow-300' style={{width:"230px"}}>
        <Link to="/">Your Reward</Link>
        </button>
        

    </div>
    <div className='basis-4/5'>
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Your Reward Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Data of Your Reward.</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Yash Kumar</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Reward Point</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">220 pts</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Waste Disposal count</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">5 times</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Bhubaneswar</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              
            </dd>
          </div>
          
        </dl>
      </div>
    </div>
          
    </div>
</div>
  )
}
