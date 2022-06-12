import React, {useState, useEffect} from 'react'
import { Link, useLocation, redirect } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userAction'



function LoginScreen({history}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    let location = useLocation()
    //let history = useHistory()

    const redirect = location.search?location.search.split('=')[1]:'/'

        //take state of userlogin from stor.js
    const userLogin = useSelector(state => state.userLogin)

        //destructure it to get components like in userReducers
    const {error, loading, userInfo}= userLogin
    
        //if user is already logged in, dont let them relogin, redirect to home
    useEffect(() => {
        if (userInfo) {
            window.location=''
            
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    

  return (
     <FormContainer>
        <h1> Sign In</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader>{loading}</Loader>}
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                type='email'
                placeholder = 'Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                >
                </Form.Control>
            </Form.Group>


            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type='password'
                placeholder = 'Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary' > Sign In</Button>
        </Form>
    
        <Row classname='py-3'>
           
            <Col>
                New Member? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                Register 
                </Link>
            </Col>

        </Row>
     </FormContainer>
  )
}

export default LoginScreen