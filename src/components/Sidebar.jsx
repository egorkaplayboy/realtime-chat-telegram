import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

const Sidebar = () => {
  return (
    <div className='flex-11'>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar