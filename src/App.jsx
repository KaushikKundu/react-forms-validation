import React, { useRef } from 'react';
import { useState } from 'react'
import FormInput from './FormInput';
import './App.css';

function App() {
  const [username, setusername] = useState("");
  const inputs = [
    {
      id:1,
      name:'Username',
      type:'text',
      placeholder:"Username",
      label:"Username"
    },
    {
      id:2,
      name:'Mobile No',
      type:'number',
      placeholder:"9102049292",
      label:"Mobile No"
    },
    {
      id:3,
      name:'Birthday',
      type:'date',
      placeholder:"Birthday",
      label:"Birthday"
    },
    {
      id:4,
      name:'Email',
      type:'text',
      placeholder:"Email",
      label:"Email"
    },
    {
      id:5,
      name:'Confirm Password',
      type:'password',
      placeholder:"Confirm Password",
      label:"Confirm Password"
    },
  ]
  const handleSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput placeholder={username} label="Username" onChange={(e) => setusername(e.target.value)}/>
        <FormInput placeholder={username} label="Mobile No"/>
        <FormInput placeholder={username}/>
        <FormInput placeholder={username}/>
       <button>Submit</button>
       
      </form>
    </div>
  )
  
}

export default App;
