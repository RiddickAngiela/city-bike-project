import React from "react";

function Login() {
  return (
    <div>
      <h1>CITY BIKES</h1>
      <img src="https://www.sefiles.net/merchant/640/images/site/citybikes_logo_bannersides_colors_2013-325.png" />
      <form>
        <label>Name: </label>
        <input type="text" id="name" placeholder="Enter-name" />
        <br />
        <label>Email: </label>
        <input type="text" id="email" placeholder="Enter-email" />
        <br />
        <label>PassWord: </label>
        <input type="text" id="password" placeholder="Enter-password" />
        <br />
      </form>
      <button>Enter</button>
    </div>
  );
}

export default Login;
