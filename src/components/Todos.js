import React from 'react';
import TodoItem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends React.Component{
  
    render() {

        return this.props.todos.map((item) =>(
            <TodoItem key = {item.id} todo = {item} markComplete = {this.props.markComplete} taskdelete = {this.props.taskdelete} />
        ));
    }
    
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}


export default Todos;