import { useEffect, useState } from "react";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    // const [user, setUser] = useState({})
///posts?_where={"or":[...]}  
///http://localhost:3001/users?email:eq=sam@tomashi.dev
    useEffect(()=> {
        fetch("http://localhost:3001/users?email:eq=sam@tomashi.dev")
        .then((response)=> response.json())
        .then((data)=> console.log(data))
    }, [])

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }

    function handleOnChange(event){
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    

  return (
    <form onSubmit={handleSubmit} className="frm-login border border-primary p-1 m-1">
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
