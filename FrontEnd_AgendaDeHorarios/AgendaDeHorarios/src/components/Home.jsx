import React, { Fragment } from 'react';
import { Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Teachers from './Teachers';
import Cadastro from './Cadastro';
import { useNavigate } from "react-router-dom"


const Home = () => {

    let history = useNavigate();

    const handleDelete = (id) => {
        var index = Teachers.map(function(e){
            return e.id
        }).indexOf(id);

        Teachers.splice(index,1);

        history('/');
        }

  return (
    <Fragment> 
        <div className='m4'>
            <div className='header'>
                <Cadastro/>
            </div>
            <Table striped bordered hover className='m-5' style={{width: "95%"}} >
                <thead>
                    <tr>
                        <th>
                            Nome
                        </th>
                        <th>
                            Matéria
                        </th>
                        <th> 
                            Turma
                        </th>
                        <th> 
                            Horas
                        </th>
                        <th> 
                            Data
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Teachers &&  Teachers.length > 0
                        ?
                        Teachers.map((item) => {
                            return(
                                <tr>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.subject}
                                    </td>
                                    <td>
                                        {item.classname}
                                    </td>
                                    <td>
                                        {item.hours}
                                    </td>
                                    <td>
                                        {item.date}
                                    </td>
                                    <td style={{width: "20px"}}>
                                        <Button onClick= {() => handleDelete(item.id)}> DELETE </Button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "Nenhuma informação disponível"
                    }
                </tbody>
            </Table> 
        </div>
    </Fragment>
  )
}

export default Home