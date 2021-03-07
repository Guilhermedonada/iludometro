import React, { useEffect, useState } from 'react'
import FriendsSummary from './FriendsSummary'
import '../App.css';


const Home = () => {

   //executa apenas uma vez ao carregar o componente
  useEffect(() => {
    getUser()
  },[])

  const[friends, setFriends] = useState([])

  const getUser = async () => {
    const response = await fetch('http://localhost:8081/users/get_friends')
    const data = await response.json()
    // console.log(data.user[0].friends)
    setFriends(data.user[0].friends)
  }


  return(

    <div className="css-home">
      <div className="css-home-div-find">
        <input className="css-home-find" placeholder="Typo here to find someone" type="text"/>
      </div>
      <div className="css-overflow css-home-friends">
        {
          friends.map(friend => (
            // console.log(friend)
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