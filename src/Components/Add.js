import React,{useState} from 'react'
import { Button,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Demo from './Demo';
import { Link,useNavigate } from 'react-router-dom';
import {v4 as uuid} from 'uuid';


const Add = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");

    let history = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const id = uuid();

        const uniqueId = id.slice(0,8);
        let a = name, b = email, c = mobile;

        Demo.push({id:uniqueId,Name:a,Email:b,Mobile:c});
        history("/");
    }

  return (
    <div>
    <Form className='d-grid gap-2' style={{margin:"15rem"}}>
    <Form.Group className='mb-3' controlId='formName'>
        <Form.Control type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} required ></Form.Control>
    </Form.Group>
    <Form.Group className='mb-3' controlId='formEmail'>
        <Form.Control type='text' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} required ></Form.Control>
    </Form.Group>
    <Form.Group className='mb-3' controlId='formmobile'>
        <Form.Control type='text' placeholder='Enter Mobile No.' onChange={(e)=>setMobile(e.target.value)} required ></Form.Control>
    </Form.Group>

    <Button type='submit' onClick={(e)=>handleSubmit(e)}>Submit</Button>
    </Form>
    </div>
  )
}

export default Add