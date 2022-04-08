import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Task from '../components/Task'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import { listTaskDetails } from '../actions/taskActions'

//import tasks from '../taskies'
//import axios from 'axios';

function TaskScreen({ match }) {
  let params = useParams();
  const dispatch = useDispatch()
  const taskDetails = useSelector(state => state.taskDetails)
  const { loading, error, task } = taskDetails

  //const [ tasks, setTask] = useState([])

  useEffect(()  => {
    dispatch(listTaskDetails(params.id))

  }, [dispatch, match ])
     // async function fetchTasks(){
      //  const { data } = await axios.get(`/tasks/${match.params.id}`)
      //  setTask(data)
      //}

      //fetchTasks()



    //let task = {}
  //const task = task
    return (
      <div>
        <Link to='/' className='btn btn-light my-3'>Go back</Link>
        
        
        {loading ?
          <Loader />
          : error
            ? <Message variant='danger'>{error}</Message>
            : (
           
             
              <div className='task-container' key={task._id}>
                <strong> Category: </strong> {task.category}
                <strong> Name: </strong> {task.name}
                <Image src={task.image} alt = {task.name} fluid />
              </div>
           
            )
        }    
      </div>
    );
};

export default TaskScreen