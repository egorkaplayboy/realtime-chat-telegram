import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className='p-3 overflow-y-scroll messages-container'>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
    </div>
  )
}

export default Messages