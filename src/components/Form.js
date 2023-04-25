import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submitData, setSubmitData] = useState([])
  const[errorMessage, setErrorMessage] = useState ([])

  function handleFirstNameChange(event){
    setFirstName(event.target.value)
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault()
    if(firstName.length>0){
      const formData ={
        firstName:firstName,
        lastName:lastName
      }
      const array=[...submitData,formData]
      setSubmitData(array)
      setFirstName(" ")
      setLastName(" ")
      setErrorMessage([])
    }else{
      setErrorMessage(["firstname is required"])
    }
  }
  const list = submitData.map((item, index)=>{
    return(
      <div> key ={index}
        {item.firstName} {item.lastName}
      </div>
    )
  })


  return (

    <div>


      <form onSubmit={handleSubmit}>
       <input type="text" onChange={handleFirstNameChange} value={firstName} />
       <input type="text" onChange={handleLastNameChange} value={lastName} />
       <button type="submit">Submit</button>
      </form>
     {errorMessage.length > 0 ? errorMessage.map((item, index)=>(
      <p key={index} style={{ color: "red" }}>
      {item}
      </p>
      ))
     : null}
      <h2>Submissions</h2>
      {list}
    </div>
  );
}

export default Form;
