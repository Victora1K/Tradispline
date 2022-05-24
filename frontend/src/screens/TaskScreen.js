import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Task from '../components/Task'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import { listTaskDetails } from '../actions/taskActions'



function TaskScreen({ match, history }) {
  const [type, setType] = useState(1)
  let navigate = useNavigate();
  let params = useParams();
  const dispatch = useDispatch()
  const taskDetails = useSelector(state => state.taskDetails)
  const { loading, error, task } = taskDetails


  useEffect(() => {
    dispatch(listTaskDetails(params.id))

  }, [dispatch, match])

  const addToPlanHandler = () => {
    navigate(`/plan/${params.id}`, {replace: true})
    //history.push(`/plan/${params.id}`)
    //console.log('Add to Plan:', params.id)
  }
  //const [ tasks, setTask] = useState([])
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
              <strong> Description: </strong> {task.description}
              <Card>
                <Image src={task.image} alt={task.name} fluid />

                <ListGroup.Item>
                  <Row>
                    <Col>
                      Type:
                    </Col>
                    <Col xs='auto'> <Form.Select aria-label="Default select example">
                      <option >Select a trade plan</option>
                      <option value="1">Scalp</option>
                      <option value="2">Daytrade</option>
                      <option value="3">Swing</option>
                    </Form.Select></Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    onClick={addToPlanHandler}
                    className='btn-block'
                    type='button'>
                    Add task to Plan
                  </Button>
                </ListGroup.Item>
              </Card>
            </div>

          )
      }
    </div>
  );
};

export default TaskScreen