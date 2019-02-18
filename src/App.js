import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos.js';
import Header from './components/Header';
import Addtodo from './components/AddTodo';
import uuid from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from './components/pages/About'
import Axios from 'axios'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todos: []
    }
  }

  markComplete(id){
   
    this.setState({

      todos: this.state.todos.map( item => {

        if(item.id === id){
            item.completed = !item.completed
        }

        return item;
      })

    })

  }

  taskdelete(id){
   // console.log("delete called :",id,this.state);

    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })

  }

  handleAddToDo(title){

      //console.log("add todo called: ",title);
      const newTodo= {
        //id: uuid.v4(),
        title:title,
        completed:false
      }
      //console.log(newTodo);

      Axios.post('https://jsonplaceholder.typicode.com/todos',newTodo).then(res => {
        res.data.id=uuid.v4();
        //console.log(res);
        //... spread operator
        this.setState({todos: [res.data, ...this.state.todos]})}) //concats the response using spread to state todos array
       
      
      // this.setState({
      //     todos:[...this.state.todos, newTodo]
      // });

  }


componentDidMount(){

    Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=12").then(response =>{
       // console.log(response);
        this.setState({
          todos: response.data
        })
    })

}


  render() {
  
    return (
      <Router>
        <div className="App">
          <div className="container">
              <Header />          
              <Route exact path="/" render={
                props =>(
                  <React.Fragment>
                      <Addtodo handleAddToDo={this.handleAddToDo.bind(this)}/>                    
                      <Todos todos={this.state.todos} 
                      markComplete={this.markComplete.bind(this)} 
                      taskdelete={this.taskdelete.bind(this)}/>
                  </React.Fragment>
                )
              }>
              </Route>  

              <Route path="/about" component={About} />          
              
              
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
