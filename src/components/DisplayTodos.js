import React, {useState} from 'react'
import { Card, Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import { connect } from 'react-redux'

function DisplayTodos({todos}) {

 
  return (
    <Container>
        <Row>
            <Col>
                <Card className='mt-3 shadow-sm'>
                    <Card.Body>
                        <h3>All Todos are here</h3>
                        <DisplayCount/>
                        <ListGroup>
                        {
                            todos.map((todos, index) => {
                                return (
                                    <ListGroupItem key={index}>
                                        <h4 className='fs-4'>{todos.title}</h4>
                                        <p className='fs-5'>{todos.description}</p>
                                    </ListGroupItem>
                               )
                            })
                        }
                         </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

const mapStateToProps = (state) => {
    console.log("state == ", state.todoReducers);
    return {todos :state.todoReducers}
}

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps) (DisplayTodos)