import React from 'react'

function Message(props) {
  return (
    <div>
        <p className="message">{props.message}</p>
    </div>
  )
}

export default Message