import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Teachers from './Teachers';
import DatePicker from './DatePicker';
import { Link, useNavigate } from "react-router-dom"


const Home = () => {

    let history = useNavigate();

    const handleEdit= (id, name, subject) => {
        localStorage.setItem('name', name);
        localStorage.setItem('subject', subject);
        localStorage.setItem('id', id);
    }

    const handleDelete = (id) => {
        var index = Teachers.map(function(e){
            return e.id
        }).indexOf(id);

        Teachers.splice(index,1);

        history('/');
        }

  return (
    <Fragment> 
        <div style={{margin:"10rem"}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>
                            Nome
                        </th>
                        <th>
                            Matéria
                        </th>
                        <th> 
                            
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
                                        <Link to={`/edit`}>
                                        <Button onClick= {() => handleEdit(item.id, item.name, item.subject)}> Edit </Button>
                                        </Link> &nbsp;
                                        <Button onClick= {() => handleDelete(item.id)}> DELETE </Button>
                                        <DatePicker />
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "Nenhum informação disponível"
                    }
                </tbody>
            </Table> 
            <br></br>
            <Link className="d-grip gap-2" to="/create">
                <Button size="lg"> Create </Button>
            </Link>
        </div>
    </Fragment>
  )
}

export default Home