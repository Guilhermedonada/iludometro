import React, { useContext } from 'react'

import {UserContext} from './context/UserContext'


const Resume = () => {

  const[user, setUser] = useContext(UserContext)

  console.log(user)
  return(
    <div className="css-resume">
      <h1>My Daily Resume</h1>
      <div className="css-resume-icons">
        <div className="css-summary-icons">
          <i class="lar la-heart"></i>
          <span>{user.votes.heart}</span>
        </div>
        <div className="css-summary-icons">
          <i class="las la-heart-broken"></i>
          <span>{user.votes.heartbroken}</span>
        </div>
      </div>
      <div className="css-resume-icons">
        <div className="css-summary-icons">
          <i class="las la-fire-alt"></i>
          <span>{user.votes.fire}</span>
        </div>
        <div className="css-summary-icons">
          <i class="las la-horse-head"></i>
          <span>{user.votes.horse}</span>
        </div>
      </div>
      <div className="css-resume-icons">
        <div className="css-summary-icons">
          <i class="lar la-eye"></i>
          <span>{user.votes.eye}</span>
        </div>
        <div className="css-summary-icons">
          <i class="las la-poo"></i>
          <span>{user.votes.poo}</span>
        </div>
      </div>
      <div className="css-resume-icons">
        <div className="css-summary-icons">          
          <i class="las la-bomb"></i>
          <span>{user.votes.bomb}</span>
        </div>
        <div className="css-summary-icons">
          <i class="las la-frown"></i>
          <span>{user.votes.frown}</span>
        </div>
      </div>
    </div>
  )
}

export default Resume

