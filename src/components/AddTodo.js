import React, { Component } from 'react'

export class Addtodo extends Component {
    state ={
        title: ''
    }
    handleOnChange = (e) => this.setState({
        title: e.target.value
    });

    onSubmit = (e) =>{ 
        e.preventDefault(); 
        e.target[0].value=" "; 
        this.props.handleAddToDo(this.state.title)}

  render() {

    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <input type="text" name="title" 
            style={{flex: '10',padding:'5px'}} 
            onChange={this.handleOnChange}
            placeholder="Add Todo..."/>
        <input type="submit" className="btn" style={{flex: '1'}} />
      </form>
    )
    
  }
}

export default Addtodo
