import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { Card, InputGroup } from 'react-bootstrap';

const ResetPassword = () => {
  const [input, setInput] = useState({});
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }))
    console.log(input);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let api = "http://localhost:8000/user/registration";
    axios.post(api, input).then((res) => {
      alert("You are succesfully registered!!!");
    })

  }
  return (
    <>
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
          {/* <h2 className="text-center mb-4"></h2> */}
          <Form>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label className="fw-bold">Enter Old Password</Form.Label>
              <InputGroup>
                <InputGroup.Text className="bg-light">
                  <i className="bi bi-person"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Type your Email"
                  className="form-control"
                  type="password" name="password" value={input.password} onChange={handleInput} />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label className="fw-bold">Enter NewPassword</Form.Label>
              <InputGroup>
                <InputGroup.Text className="bg-light">
                  <i className="bi bi-lock"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Type your password"
                  className="form-control"
                  type="password" name="password" value={input.password} onChange={handleInput} />
              </InputGroup>
            </Form.Group>



            <Button
              variant="primary"
              className="w-100"
              type="submit" onClick={handleSubmit}
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
export default ResetPassword;