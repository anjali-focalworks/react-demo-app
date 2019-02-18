import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
      return {
        textDecoration : this.props.todo.completed ? 'line-through' : 'none',
        backgroundColor : '#f4f4f4',
        borderBottom : '1px #ccc dotted',
        padding : '10px'
      }  
    }

   
  render() {

    const {id, title,completed}=this.props.todo;

    return (
        
        <div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} checked={completed}/> {' '}
                {title} {' '}
                <button style={deleteBtnStyle} onClick={this.props.taskdelete.bind(this,id)}>X</button>
            </p>
        </div>
     
    )
  }
}

TodoItem.propTypes ={

    todo:PropTypes.object.isRequired

}

// const itemStyle ={
//     backgroundColor : '#f4f4f4'
// }

const deleteBtnStyle ={
    backgroundColor : '#ff0000',
    color: '#fff',
    padding: '5px 7px',
    borderRadius: '50%',
    cursor: 'poniter',
    float: 'right',
    border: 'none'
}

export default TodoItem
