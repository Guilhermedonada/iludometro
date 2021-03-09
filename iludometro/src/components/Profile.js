import React, {useContext} from 'react'
import lula from '../images/lula.jpg'

import {UserContext} from './context/UserContext'


const Profile = () => {

  const[user, setUser] = useContext(UserContext)

  return(
    <div className="css-profile">
      <img src={lula} />
      <h5>{user.name}</h5>
      <p>Bolsonaro filha da puta</p>
      <p className="css-color-green">I Hate: {user.hate}</p>
    </div>
  )
}

export default Profile