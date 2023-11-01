import React,  {useState, useEffect} from 'react'
import {Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import Teachers from './Teachers';
import {v4 as uuid} from "uuid";
import { Link, useNavigate } from "react-router-dom"

function Edit(){

    const[name, setName] = useState('');
    const[subject, setSubject] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    var index = Teachers.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Teachers[index];
        a.name = name;
        a.subject = subject;
        
        history("/")    
    }

    useEffect(() => {
        setName(localStorage.getItem('name'))
        setSubject(localStorage.getItem('subject'))
        setId(localStorage.getItem('id'))
    }, [])

  return (
    <div>
        <Form className='d-grid gap-2' style={{margin:"15rem"}}>
            <Form.Group className='mb-3' controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' controlId="formSubject">
                <Form.Control type="text" placeholder="Enter Subject" value={subject} required onChange={(e) => setSubject(e.target.value)} />
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit"> Update </Button>
        </Form>
    </div>
  )
}

export default Edit