import React,  {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import Teachers from './Teachers';
import {v4 as uuid} from "uuid";
import { Link, useNavigate } from "react-router-dom"

function Add(){

    const[name, setName] = useState('');
    const[subject, setSubject] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
            
            const ids = uuid();
            let uniqueId = ids.slice(0, 8);

            let a = name,
            b = subject;

            Teachers.push({id: uniqueId, name: a, subject: b});

            history("/")
    }

  return (
    <div>
        <Form className='d-grid gap-2' style={{margin:"15rem"}}>
            <Form.Group className='mb-3' controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' controlId="formSubject">
                <Form.Control type="text" placeholder="Enter Subject" required onChange={(e) => setSubject(e.target.value)} />
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit"> Submit </Button>
            </Form>
    </div>
  )
}

export default Add