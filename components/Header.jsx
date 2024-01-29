import React from 'react'
import { ThemeToggler } from './ThemeToggler'

const Header = () => {
  return (
    <div className='flex items-center justify-between mx-10 border-b mt-2'>
        <div className='text-2xl '> <h1>Events Calendar</h1></div>
        <div >
        <ThemeToggler />
        </div></div>
  )
}

export default Header