import { useState } from "react";

export default function Login() {
  const [enteredValues, setenteredValues] = useState({
    email: "",
    password: "",
  });
  // when we have to see that if the user has clicked on input state or not 
  // and then thinks that if email is valid or not then we can apply this 
  const [isvalid , setisvalid ] = useState({
    email : false,
    password : false
  })
  
  const isvalideamil =
  isvalid.email   && !enteredValues.email.includes("@");
  // in this what in intial value
  // error is comming that enter value of email
  function Handelchange(identifier, event) {
    setenteredValues((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));
    setisvalid(prev=>{
      return {
        ...prev,
        [identifier] : false
      }
    })
  }
  function onSubmission(event) {
    event.preventDefault();
    console.log(enteredValues.email + enteredValues.password);
  }


  function HandelOnblur (indetifier ){
    setisvalid(prev=>{
      return{
        ...prev,
        [indetifier] : true
      }
    })
  }
  return (
    <form onSubmit={onSubmission}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => Handelchange("email", event)}
            value={enteredValues.email}
            onBlur={()=>HandelOnblur('email')}  // this function does its task when the desired input lost its focus 
          />
          {isvalideamil && (
            <div className="control-error">
              <p> enter valid email </p>
            </div>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => Handelchange("password", event)}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
