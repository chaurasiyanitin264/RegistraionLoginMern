import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';

const ResetPassword=()=>{

    const [input, setInput] = useState({});


  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values, [name]:value}))
    console.log(input);

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    let api="http://localhost:8000/user/registration";
   axios.post(api, input).then((res)=>{
    alert("You are succesfully registered!!!");
   })
 
  }


    return(
        <>
           <Form style={{width:"500px"}}>
     
     
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter old password</Form.Label>
        <Form.Control type="password" name="password" value={input.password} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter new password</Form.Label>
        <Form.Control type="password" name="password" value={input.password} onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default ResetPassword;