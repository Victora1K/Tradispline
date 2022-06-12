import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToPlan, removeFromPlan } from '../actions/planActions'
//import { Draggable } from 'react-drag-reorder'

function PlanScreen(match, location, history) {
  let params = useParams();
  const taskId = params.id

  const dispatch = useDispatch()

  const plan = useSelector(state => state.plan)
  const { planItems } = plan
  console.log('planItems:', planItems)

  useEffect(() => {
    if (taskId) {
      dispatch(addToPlan(taskId))
    }
  }, [dispatch, taskId])


  const removeFromPlanHandler = (id) => {
    dispatch(removeFromPlan(id))

  }

  const savePlanHandler = () => {
    history.push('/login?')
  }


  return (
    <div>
      <Row>
        
        <Col md={8}>
          <h1> Plan </h1>
          {planItems.length === 0 ? (
            <Message variant='info'>
              No plans yet <Link to='/'> Go back </Link>
            </Message>
          ) : (
            <ListGroup variant='flush'>
              {planItems.map(item => (
                <ListGroup.Item key={item.task}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/task/${item.task}`}>{item.name}</Link>
                    </Col>
                    <Col md={4}>
                      {item.category} - {item.description}
                    </Col>
                    <Col xs='auto'> <Form.Select aria-label="Default select example">
                      <option >plan</option>
                      <option value="1">Scalp</option>
                      <option value="2">Daytrade</option>
                      <option value="3">Swing</option>
                    </Form.Select></Col>
                    <Col md={1}>
                      <Button
                        type='button'
                        variant='light'
                        onClick={() => removeFromPlanHandler(item.task)}

                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>


        <Col>
          <ListGroup.Item>
            <Button
              type='button'
              className='btn-block'
              disabled={planItems.length === 0}
              onClick={savePlanHandler}
            >
              Save Plan
            </Button>

          </ListGroup.Item>
        </Col>

      </Row>
    </div>
  )
}

export default PlanScreen