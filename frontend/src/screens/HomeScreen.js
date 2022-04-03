import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
//import task from '../taskies'
import Task from '../components/Task'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

function HomeScreen()
{
  const [tasks, setTasks] = useState([])

  useEffect(()  => {

      async function fetchTasks(){
        const { data } = await axios.get('/tasks/')
        setTasks(data)
      }

      fetchTasks()

  }, [])

  return (
    
    <div>
      
        <h2> Keep it SIMPLE, Trade with DISCIPLINE! </h2>
        <h3>  </h3>
        <h4>Popular</h4>
        <Row>
            {tasks.map(task => (
                <Col key={task._id} sm={12} md={6} lg={4} xl={3}>
                    <Task task={task} />
                </Col>
            ))}
        </Row>

    </div>
  )
}

export default HomeScreen
