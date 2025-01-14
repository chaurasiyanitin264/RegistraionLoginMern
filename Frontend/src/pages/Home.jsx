
import React from "react";
import { Form, Button, Card, InputGroup } from "react-bootstrap";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate} from "react-router-dom";

import {message} from "antd";

const Home=()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword]= useState("");

  const navigate = useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      let api="http://localhost:8000/user/userlogin";
      const response= await axios.post(api, {email:email, password:password})
      if (response.status==200)
      {
        localStorage.setItem("username", response.data.name);
        localStorage.setItem("useremail", response.data.email);
        localStorage.setItem("userid", response.data._id);
        console.log(response.data);
         navigate("/dashboard")
      }    
   

    } catch (error) {
       message.error(error.response.data.msg)
    }
    
  }

    return(
        <>
          {/* <h1> User Login!</h1> */}
          <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(to right, #8e44ad, #3498db)",
      }}
    >
      <Card
        className="p-4 shadow"
        style={{
          width: "100%",
          maxWidth: "400px",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center mb-4">Login</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label className="fw-bold">Email</Form.Label>
            <InputGroup>
              <InputGroup.Text className="bg-light">
                <i className="bi bi-person"></i>
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Type your Email"
                className="form-control"
                name="email" value={email} 
                onChange={(e)=>{setEmail(e.target.value)}} />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label className="fw-bold">Password</Form.Label>
            <InputGroup>
              <InputGroup.Text className="bg-light">
                <i className="bi bi-lock"></i>
              </InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Type your password"
                className="form-control"
                name="password" value={password} 
                onChange={(e)=>{setPassword(e.target.value)}} />
            </InputGroup>
          </Form.Group>

          <div className="d-flex justify-content-between mb-3">
            <a href="#" className="text-decoration-none">
              Forgot password?
            </a>
          </div>

          <Button
            variant="primary"
            className="w-100"
            type="submit"  onClick={handleSubmit}
            style={{
              background: "linear-gradient(to right, #8e44ad, #3498db)",
              border: "none",
            }}
          >
            Login
          </Button>
        </Form>
      </Card>
    </div>
        </>
    )
}

export default Home;