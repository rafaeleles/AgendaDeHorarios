import React,  { useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import {v4 as uuid} from "uuid";
import { useNavigate } from "react-router-dom"
import Teachers from './Teachers'
import "../index.css"

function Cadastro(){

    const[name, setName] = useState('');
    const[subject, setSubject] = useState('');
    const[classname, setClassname] = useState('');
    const[hours, setHours] = useState('');
    const[date, setDate] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
            
            const ids = uuid();
            let uniqueId = ids.slice(0, 8);

            let a = name,
            b = subject,
            c = classname,
            d = hours, 
            f = date;

            Teachers.push({id: uniqueId, name: a, subject: b, classname: c, hours: d, date: f});

            history("/")
    }

  return (
   <div className='d-inline-block'>
    <h1> Cadastro de Professores </h1>
        <Form style={{margin:"50px"}}>

            <input type="text" placeholder="Digite o nome do Professor..." required onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Digite a matéria..." required onChange={(e) => setSubject(e.target.value)} />
            <input type="text" placeholder="Digite a turma..." required onChange={(e) => setClassname(e.target.value)} />
            <input type="number" min="0" placeholder="Digite a Carga Horária..." required onChange={(e) => setHours(e.target.value)} />
            <input type="date" required onChange={(e) => setDate(e.target.value)} />
            <Button className='submit' onClick={(e) => handleSubmit(e)} type="submit"> Submit </Button>
        </Form>
    </div>
  )
}

export default Cadastro