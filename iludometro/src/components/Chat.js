import React from 'react'

import lula from '../images/lula.jpg'

const Chat = () => {
  return(
    <div className="css-chat">

    <div className="css-overflow">
      <div className="css-friend-card ">
        <img src={lula}/>
        <div>
          <h1>Nome do amigo</h1>
        </div>        
      </div>
    </div>
    
  
  </div>
  )
}

export default Chat