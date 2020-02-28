import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const Login = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const handleChange = event => {
    const { value, name } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("login", user)
      .then(response => {
        localStorage.setItem("token", response.data.payload);
        props.history.push("/bubble-page");
      })
      .catch(error => console.log("Failed Login", error));
  };
}