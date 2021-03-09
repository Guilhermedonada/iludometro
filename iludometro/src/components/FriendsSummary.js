import React, { useEffect, useState } from 'react'
import lula from '../images/lula.jpg'

const FriendsSummary = (props) => {

  const[heart, setHeart] = useState(props.votes.heart)
  const[heartbroken, setHeartBroken] = useState(props.votes.heartbroken)
  const[fire, setFire] = useState(props.votes.fire)
  const[horse, setHorse] = useState(props.votes.horse)
  const[eye, setEye] = useState(props.votes.eye)
  const[poo, setPoo] = useState(props.votes.poo)
  const[frown, setFrown] = useState(props.votes.frown)
  const[bomb, setBomb] = useState(props.votes.bomb)

  const Heart = (e) => {
    setHeart(heart + 1)
  }

  const HeartBroken = (e) => {
    setHeartBroken(heartbroken + 1)
  }
 
  const Fire = (e) => {
    setFire(fire + 1)
  }

  const Horse = (e) => {
    setHorse(horse + 1)
  }

  const Eye = (e) => {
    setEye(eye + 1)
  }

  const Poo = (e) => {
    setPoo(poo + 1)
  }

  const Frown = (e) => {
    setFrown(frown + 1)
  }

  const Bomb = (e) => {
    setBomb(bomb + 1)
  }
  

  return(
    <div className="css-friends-summary">
      <div className="css-friends-summary-profile">
        <img src={lula}/>
        <div className="css-friends-summary-profile-text">
          <div>
            <h1>{props.name}</h1>
            <h2>summary</h2>
          </div>          
          <p>{props.hate}</p>
        </div>
      </div>
      <div>
        <div className="css-friends-summary-icons">
          <div>
            <i class="lar la-heart f-24" onClick={Heart}></i>
            <span className="f-12">{heart}</span>
          </div>
          <div>
            <i class="las la-heart-broken f-24" onClick={HeartBroken}></i>
            <span className="f-12">{heartbroken}</span>
          </div>
          <div>
            <i class="las la-fire-alt f-24" onClick={Fire}></i>
            <span className="f-12">{fire}</span>
          </div>
          <div>
            <i class="las la-horse-head f-24" onClick={Horse}></i>
            <span className="f-12">{horse}</span>
          </div>
          <div>
            <i class="lar la-eye f-24" onClick={Eye}></i>
            <span className="f-12">{eye}</span>
          </div>
          <div>
            <i class="las la-poo f-24" onClick={Poo}></i>
            <span className="f-12">{poo}</span>
          </div>
          <div>
            <i class="las la-frown f-24" onClick={Frown}></i>
            <span className="f-12">{frown}</span>
          </div>
          <div>
            <i class="las la-bomb f-24" onClick={Bomb}></i>
            <span className="f-12">{bomb}</span>
          </div>
     
      
        
        </div>
      </div>
    </div>
  )
}

export default FriendsSummary