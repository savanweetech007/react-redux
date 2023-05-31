import React, {useState} from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import { addTodo } from '../redux/actions/todo'
import { connect } from 'react-redux'

function AddTodo({addTodo}) {

    const [todo, setTodo] = useState({
        title: "",
        description: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(todo)
        addTodo(todo)
        setTodo({
            title: "",
            description: ""
        })
    }

  return (
    <Container>

        <Row>

            <Col md={12}>

                <Card className='shadow-sm'>
                    <Card.Body>
                        <h3>add Todo here</h3>
                        <DisplayCount/>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='fs-3'>
                                <Form.Label>
                                    Todo title
                                </Form.Label>
                                <Form.Control type='text' placeholder='add task title' value={todo.title} onChange={(e) => {
                                    setTodo({
                                        ...todo,
                                        title: e.target.value
                                    })
                                }}></Form.Control>
                            </Form.Group>

                            <Form.Group className='mt-3' >
                                <Form.Label className='fs-3'>
                                    Todo description
                                </Form.Label>
                                <Form.Control as={"textarea"} type='text' placeholder='add task' value={todo.description} onChange={(e) => {
                                    setTodo({
                                        ...todo,
                                        description: e.target.value
                                    })
                                }}></Form.Control>
                            </Form.Group>

                            <Container className='text-center mt-3' >
                                <Button type='submit' varient={'primary'}>
                                    Add Todo
                                </Button>
                            </Container>

                        </Form>
                    </Card.Body>
                </Card>

            </Col>

        </Row>

    </Container>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({ 
    addTodo: (todo) => (dispatch(addTodo(todo)))
})

export default connect(mapStateToProps, mapDispatchToProps) (AddTodo)