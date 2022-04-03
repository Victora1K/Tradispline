import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Task from '../components/Task'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
//import tasks from '../taskies'
import axios from 'axios';

function TaskScreen({match}) {

  const [task, setTask] = useState([])

  useEffect(()  => {

      async function fetchTasks(){
        const { data } = await axios.get(`/tasks/${match.params.id}`)
        setTask(data)
      }

      fetchTasks()

  }, [])

 
  //const task = task
    return (
      <div>
        <Link to='/' className='btn btn-light my-3'>Go back</Link>
        <h4> <Row>
            
                <Col sm={12} md={6} lg={4} xl={3}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{task.name}</h3>
                  </ListGroup.Item>
                </ListGroup>
                </Col>
            
        </Row></h4>
        
      
      </div>
    )
}

export default TaskScreen