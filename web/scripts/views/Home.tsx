import { useState } from 'react'
import './_layout.css'
import RootLayout, { mount } from './_layout'

function Home() {


  return (
    <RootLayout>
      <div className='flex flex-row h-full p-2 gap-2'>
        <div className='w-50 h-full bg-neutral-800 rounded-2xl'>
          <p>Files</p>

        </div>
        <div className='w-full h-full bg-neutral-900 rounded-2xl flex flex-col justify-between p-2'>
          <div className='text-left'>
              hello
          </div>
          <div>
            <input className='border-2 border-neutral-700 px-2 rounded-2xl w-full' type='text-field' />
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default Home 
mount(Home);