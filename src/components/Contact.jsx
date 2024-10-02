import { useState } from "react";
import Player from "./Player";

export default function Contact() {
  const [formInputs, setFormInput] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const changeName = (e) => {
    setFormInput({ name: e.target.value, email: formInputs.email, age: formInputs.age });
  }
  const changeEmail = (e) => {
    setFormInput({ name: formInputs.name, email: e.target.value, age: formInputs.age });
  }
  const changeAge = (e) => {
    setFormInput({ name: formInputs.name, email: formInputs.email, age: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(true);
    console.log(formInputs);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>User Name </label>
      <input type="text" value={formInputs.name} onChange={changeName} />

      <label>Email </label>
      <input type="text" value={formInputs.email} onChange={changeEmail} />
      <label>Age </label>
      <input type="text" value={formInputs.age} onChange={changeAge} />

      <hr />
      <button type='submit'>Submit</button>

      {submittedData ? <div> name is {formInputs.name} email is {formInputs.email}
        age is {formInputs.age}
      </div> : null}

    </form>
  )
}