import React, {useState, createContext, useEffect} from 'react'


export const UserContext = createContext()


export const UserProvider = (props) => {

  useEffect(() => {
    getUser()
  },[])

  const[user, setUser] = useState({
    votes: {},
    friends: [],
  })

  const getUser = async () => {
    const response = await fetch('http://localhost:8081/users/get_friends')
    const data = await response.json()
    setUser(data.user[0])  
  } 

  return(    
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  )

}