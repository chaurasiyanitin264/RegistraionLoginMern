
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { message } from "antd";

const Registration = () => {
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let api = "http://localhost:8000/user/registration";
      const Data = await axios.post(api, input);
      if (Data.status === 200) {
        message.success("You are successfully registered!!!");
        navigate("/home");
      }
    } catch (error) {
      message.error(error.response.data.msg);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "linear-gradient(to right, #8e44ad, #3498db)",
        }}
      >
        <div
          style={{
            width: "350px", 
            padding: "15px", 
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginTop: "50px",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Register</h2> {/* Reduced marginBottom */}
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Enter name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={input.name || ""}
                onChange={handleInput}
                placeholder="Type your name"
              />
            </Form.Group>
            <Form.Group className="mb-2"> 
              <Form.Label>Enter city</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={input.city || ""}
                onChange={handleInput}
                placeholder="Type your city"
              />
            </Form.Group>
            <Form.Group className="mb-2"> 
              <Form.Label>Enter email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={input.email || ""}
                onChange={handleInput}
                placeholder="Type your email"
              />
            </Form.Group>
            <Form.Group className="mb-2"> 
              <Form.Label>Enter password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={input.password || ""}
                onChange={handleInput}
                placeholder="Type your password"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={handleSubmit}
              style={{
                width: "100%",
                background: "linear-gradient(135deg, #7b2ff7, #03d7fc)",
                border: "none",
              }}
            >
              Register
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Registration;
