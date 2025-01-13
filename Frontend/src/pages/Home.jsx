import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      let api = "http://localhost:9000/user/userLogin";
      const response = await axios.post(api, { email: email, password: password });
      if (response.status == 200) {
        localStorage.setItem("username",response.data.name);
        localStorage.setItem("useremail",response.data.email);
        console.log(response.data);
        navigate("/dashboard");
      }
    } catch (error) {
      alert(error.response.data.msg);
    }
  }

  return (
    <>
      <h2>Login Page</h2>
      <Form style={{ width: "500px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter email</Form.Label>
          <Form.Control type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter password</Form.Label>
          <Form.Control type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  )
}
export default Home;