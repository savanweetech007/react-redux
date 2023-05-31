import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'

function DisplayCount({todos}) {
  return (
    <Card className='shadow-sm border border-o mt-3'>
        <Card.Body>
            <h4>
                number of todos: {[...todos].length}
            </h4>
        </Card.Body>
    </Card>
  )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todoReducers
    }
}

const mapDispatchToProps = (dispatch) => ({})

export default  connect(mapStateToProps, mapDispatchToProps)  (DisplayCount)