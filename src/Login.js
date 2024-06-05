import React, { useState } from 'react'

export default function Login() {
    const [user,setUser]=useState("")
    const [password,setPassword]=useState("")
    const [userErr,setUserErr] = useState(false)
    const [passErr,setPassErr]=useState()
    const [print,setPrint] = useState(null)
    function loginHandle(e){
        // alert("harsh")
        setPrint({user,password})
        if(user.length<3 || password.length<7){
            alert("type correct value")
        }
        else{
            alert("all good")
        }
        e.preventDefault()
     }
    function userHandler(e){
        let item = e.target.value;
        if(item.length<3){
           setUserErr(true)
        }
        else{
            setUserErr(false)
        }
        setUser(item)
    }
    function passwordHandler(e){
        let item = e.target.value;
        if(item.length<7){
           setPassErr(true)
        }
        else{
            setPassErr(false)
        }
        setPassword(item)
    }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginHandle}>
      <div>
      <input type="text" placeholder='Enter User Id' onChange={userHandler}/> {userErr?<span>User Not Valid</span>:null}
      </div>
      <div>
        <input type ="password" placeholder='Enter User Password' onChange={passwordHandler}/>{passErr?<span>User Not Valid</span>:null}
      </div>
      <button type ="submit">Login</button>
      </form>
      {
        print && (
            <div>
                <h1>Form data</h1>
                <p><h2>User:{print.user}</h2></p>
                <p><h2>Password:{print.password}</h2></p>
            </div>
        )
      }
      
    </div>
  )
}
