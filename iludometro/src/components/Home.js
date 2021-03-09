import React, { useEffect, useState, useContext } from 'react'
import FriendsSummary from './FriendsSummary'
import '../App.css';

import io from "socket.io-client"


import {UserContext, UserProvider} from './context/UserContext'

const socket = io('http://localhost:8081', {
  transports: ['websocket', 'polling']
});

const Home = () => {

  const [user, setUser] = useContext(UserContext)

  useEffect(() => {
    socket.on('connect',(data) => {
      socket.emit('joined', 'Hello World from client...');
    });
  }, []);



  // console.log(user)
  // console.log(user.friends)

  return(
    <div className="css-home">
      <div className="css-home-div-find">
        <input className="css-home-find" placeholder="Typo here to find someone" type="text"/>
      </div>
      <div className="css-overflow css-home-friends">
        {
          user.friends.map(friend => (
            <FriendsSummary
              key={friend.id}
              name={friend.name}
              hate={friend.hate}
              voted={friend.voted}
              votes={friend.votes}
            />
          ))
        }           
      </div>
    </div>
  )
}

export default Home