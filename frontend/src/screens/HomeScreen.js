import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
//import task from '../taskies'
import { useDispatch, useSelector } from 'react-redux'
import Task from '../components/Task'
import Header from '../components/Header';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Footer from '../components/Footer';
import axios from 'axios';
import { listTasks } from '../actions/taskActions'

function HomeScreen()
{
  const dispatch = useDispatch()
  const taskList = useSelector(state => state.taskList)
  const { error, loading, tasks } = taskList

  /*const [tasks, setTasks] = useState([])
  */

  useEffect(()  => {

     dispatch(listTasks())

    /*  async function fetchTasks(){
        const { data } = await axios.get('/tasks/')
        setTasks(data)
      }

      fetchTasks()
      */

  }, [dispatch])
  //const tasks = []
  return (
    
    <div>
      
      <h2> Keep it SIMPLE, Trade with DISCIPLINE! </h2>
      <h4>Popular</h4>
      {loading ? <Loader />
          : error ? <Message variant='danger'> {error} </Message>
            :
            
            <Row>
              <strong> Plan A - Scalp </strong>
              {tasks.map(task => (
                <Col key={task._id} sm={12} md={6} lg={4} xl={3}>
                    <Task task={task} />
                </Col>
              ))}
              <strong> Plan B - Swing </strong>
              {tasks.map(task => (
                <Col key={task._id} sm={12} md={6} lg={4} xl={3}>
                    <Task task={task} />
                </Col>
              ))}
            </Row>
      }
       

    </div>
  )
}

export default HomeScreen
