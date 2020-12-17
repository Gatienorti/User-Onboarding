import React from 'react'

export default function Form (props){
    const {values, submit, change, disabled, error} = props




    const onSubmit = evt => {
        evt.preventDefault();
        submit();
      }
    
    const onChange = evt => {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
        const { name, value, checked, type } = evt.target
        const valueType = type === 'checkbox' ? checked : value
        change(name, valueType)
      }
return(   
    <form className="form" onSubmit={onSubmit}>
      <div className="form-group submit">

        <div className="error">
          <div>{error.name}</div>
          <div>{error.email}</div>
          <div>{error.password}</div>
          <div>{error.termsOfCondition}</div>
        </div>
      </div>

      <div className="formGroup">
        <h3>Information</h3>

        <label>
          Name&nbsp;
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
         />
        </label>

        <label>
          Email
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            type="text"
          />
        </label>

        <label>
          Password
          <input
            value={values.password}
            onChange={onChange}
            name="password"
            type="password"
            autoComplete="on"
          />
        </label>
        </div>

      <div className="form-group checkboxes">
        
        <label>
        Terms of Service
          <input
            type="checkbox"
            name="termsOfCondition"
            checked={values.termsOfCondition}
            onChange={onChange}
          />
        </label>
        <button disabled={disabled}>submit</button>
      </div>
    </form>

)}