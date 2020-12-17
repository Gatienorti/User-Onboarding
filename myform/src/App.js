import './App.css';
import React, { useState, useEffect } from 'react'
import Form from './component/Form'
import schema from './schema/SchemaForm'
import axios from 'axios'
import * as yup from 'yup'

const initFormVal = {
  name:'',
  email:'',
  password:'',
  termsOfCondition:false,
}

const initialForm = []
const initialDisabled = true



function App() {
  const[form, setForm] = useState(initialForm)
  const[formVal, setFormVal] = useState(initFormVal)
  const[formErr, setFormErr] = useState(initFormVal)
  const[disabled, setDisabled] = useState(initialDisabled)

  const postFriend = (newFriend) => {
    axios
    .post('https://reqres.in/api/users', newFriend)
    .then((res)=> {
      setForm([...form, res.data])
    })
    .catch((err) =>{
      debugger
    })
    .finally(()=>{
      setFormVal(initFormVal)
      console.log('console.log from axios.Post', form)
    })
  }
  const fetch =()=>{
    axios.get('https://reqres.in/api/users')
    .then((res)=> {
      setForm(res.data.data)
    })
    .catch((err) =>{
      debugger
    })
  }
  const inputChange = (name ,value) =>{
    yup
      .reach(schema, name)
      .validate(value)
      .then(()=>{
        setFormErr({
          ...formErr,
          [name]:''
        })
      })
      .catch((err)=>{
        setFormErr({
          ...formErr,
          [name]: err.errors[0]
        })
      })
      setFormVal({
        ...formVal,
        [name]: value
      })
  }
  const formSubmit = ()=>{
    const newFriend = {
      name : formVal.name.trim(),
      email : formVal.email.trim(),
      password : formVal.password.trim(),
      termsOfCondition : formVal.termsOfCondition
    }
    postFriend(newFriend)
    console.log('console.log from Submit', form)
  }
  useEffect(()=>{
    fetch()
  },[])
  useEffect(()=>{
    schema.isValid(formVal).then((valid)=>{
      setDisabled(!valid)
    })
  },[formVal])


  return (
    <div className="container">

      <header>
        <h1>Apply For Winning</h1>
      </header>
     
      <Form 
      values={formVal}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      error={formErr}
      />
      {/* {console.log('return statement form', form)} */}
    </div>
  );
}

export default App;
