import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseUser } from "../context/UserContext";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {setUser} = UseUser()
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:3001/users?email:eq=${formData.email}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0 && data[0].password === formData.password) {
          setUser(data[0]);
          alert("Welcome")
          navigate("/")
        }else{
            throw "Invalid credentials";
        }
        
      })
      .catch((error) => alert(error));
  }

  function handleOnChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="frm-login border border-primary p-1 m-1"
    >
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
