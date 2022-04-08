import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Task({task}) {
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/tasks/${task._id}`}>
            <Card.Img src={task.image} alt="Card Image"/>
        </Link>
        <Card.ImgOverlay>
        <Card.Body>
            <Link to={`/tasks/${task._id}`}>
                <Card.Title as="div">
                    <strong>{task.name}</strong>
                </Card.Title>
            </Link>

            <Card.Text as="div">
                <div className="my-3">
                    <Rating value={task.rating} text={`${task.numReviews} reviews`} color={'#f8e825'} />
                </div>  
            </Card.Text>
        </Card.Body>
        </Card.ImgOverlay>
    </Card>
  )
}

export default Task