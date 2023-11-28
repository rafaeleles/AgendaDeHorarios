import React,  {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import Server from '';
import {v4 as uuid} from "uuid";
import { useNavigate } from "react-router-dom"

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

            Server.push({id: uniqueId, name: a, subject: b, classname: c, hours: d, date: f});

            history("/")
    }

  return (
   <div className='w-25 d-inline-block'>
        <Form className='d-inline-block' style={{margin:"50px"}}>
            <p> Cadastro de Professores </p>
            <Form.Control className='d-inline-block' type="text" placeholder="Digite o nome do Professor..." required onChange={(e) => setName(e.target.value)} />
            <Form.Control className='d-inline-block' type="text" placeholder="Digite a matéria..." required onChange={(e) => setSubject(e.target.value)} />
            <Form.Control className='d-inline-block' type="text" placeholder="Digite a turma..." required onChange={(e) => setClassname(e.target.value)} />
            <Form.Control className='d-inline-block' type="number" min="0" placeholder="Digite a Carga Horária..." required onChange={(e) => setHours(e.target.value)} />
            <Form.Control className='d-inline-block' type="date" required onChange={(e) => setDate(e.target.value)} />
            <Button onClick={(e) => handleSubmit(e)} type="submit"> Submit </Button>
        </Form>
    </div>
  )
}

export default Cadastro