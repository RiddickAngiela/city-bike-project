import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    password: "",
  });
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setFormData({
      name:"",
      email: "",
      password: "",
    });
    return navigate("/home");
  }
  return (
    <div>
      <h1 className="logoHead">CITY BIKES</h1>
      <img className="logo" src="https://www.sefiles.net/merchant/640/images/site/citybikes_logo_bannersides_colors_2013-325.png" />
      <h4>Logging in....</h4>
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          className="inputform"
          placeholder="Name.."
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="inputform"
          placeholder="Email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="inputform"
          placeholder="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" value="Log in" className="button">
          login{" "}
        </button>
      </form>
    </div>
  );
}
export default Login;

