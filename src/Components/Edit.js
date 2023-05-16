
import React,{useState,useEffect} from 'react'
import { Button,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Demo from './Demo';
import { Link,useNavigate } from 'react-router-dom';

const Edit = () => {
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");

    let history = useNavigate();

    var index = Demo.map(function(e){
      return e.id;
    }).indexOf(id);

    const handleUpdate = (e)=>{
        e.preventDefault();
        let data = Demo[index];
        data.Name = name;
        data.Email = email;
        data.Mobile = mobile;
        history("/");
    }

    useEffect(()=>{
        setName(localStorage.getItem('Name'));
        setEmail(localStorage.getItem('Email'));
        setMobile(localStorage.getItem('Mobile'));
        setId(localStorage.getItem('id'));
    },[]);

  return (
    <div>
    <Form className='d-grid gap-2' style={{margin:"15rem"}}>
    <Form.Group className='mb-3' controlId='formName'>
        <Form.Control type='text' placeholder='Enter Name'value={name} onChange={(e)=>setName(e.target.value)} required ></Form.Control>
    </Form.Group>
    <Form.Group className='mb-3' controlId='formEmail'>
        <Form.Control type='text' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} required ></Form.Control>
    </Form.Group>
    <Form.Group className='mb-3' controlId='formmobile'>
        <Form.Control type='text' placeholder='Enter Mobile No.' value={mobile} onChange={(e)=>setMobile(e.target.value)} required ></Form.Control>
    </Form.Group>

    <Button type='submit' onClick={(e)=>handleUpdate(e)}>Update</Button>
    </Form>

    </div>
  )
}

export default Edit