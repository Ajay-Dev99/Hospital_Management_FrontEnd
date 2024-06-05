import React from 'react'

function Header() {
  return (
    <div className='py-3 px-10 border bg-white  shadow-lg  flex justify-between sticky top-0 z-40'>
  <img src="/images/logo.jpg" alt="Logo" className='object-contain w-24 md:w-32 ' />
  <div className='flex justify-between space-x-5 items-center'>
    <span>username</span>
    <img src="/images/user.png" alt="" className='h-8 w-8' />
    <div>
        <img src="/images/sign-out.png" alt="signout" className='h-6 w-6' />
    </div>
  </div>
</div>

  )
}

export default Header
