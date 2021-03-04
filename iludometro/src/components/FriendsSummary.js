import React from 'react'
import lula from '../images/lula.jpg'

const FriendsSummary = (props) => {
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
            <i class="lar la-heart f-24"></i>
            <span className="f-12">12</span>
          </div>
          <div>
            <i class="las la-heart-broken f-24"></i>
            <span className="f-12">12</span>
          </div>
          <div>
            <i class="las la-fire-alt f-24"></i>
            <span className="f-12">12</span>
          </div>
          <div>
            <i class="las la-horse-head f-24"></i>
            <span className="f-12">12</span>
          </div>
          <div>
            <i class="lar la-eye f-24"></i>
            <span className="f-12">12</span>
          </div>
          <div>
            <i class="las la-poo f-24"></i>
            <span className="f-12">12</span>
          </div>
          <div>
            <i class="las la-frown f-24"></i>
            <span className="f-12">12</span>
          </div>
          <div>
            <i class="las la-bomb f-24"></i>
            <span className="f-12">12</span>
          </div>
     
      
        
        </div>
      </div>
    </div>
  )
}

export default FriendsSummary