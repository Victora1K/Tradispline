/*import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Task from '../components/Task'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import { listTaskDetails } from '../actions/taskActions'

//import tasks from '../taskies'
import axios from 'axios';

function ScalpScreen({ match }) => {
  const [data, setTasks] = useState([]);
  useEffect(() => {
    listTaskDetails();
  }, []);

  const listTaskDetails = () => {
    axios.get(`/tasks/?id=${match.params.id}`)
    .then((res) => {
      setTasks(res.data);
      console.log(res.data);
    })
    .catch((err) => console.log(err));
  };
  return (
    <div>
      {tasks.map(task) => (
        return (
          <div className='task-container' key={task._id}>
          </div>
        )
      )}
    </div>
  )
}

export default ScalpScreen
*/