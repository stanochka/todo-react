import React from 'react';
import Header from './Header';
import TodosList from './TodosList';
import TodoInput from './TodoInput';
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {

  state = {
     todos: [
       {
         id: uuidv4(),
         title: "Setup development environment",
         completed: true
       },
       {
         id: uuidv4(),
         title: "Develop website and add content",
         completed: false
       },
       {
         id: uuidv4(),
         title: "Deploy to live server",
         completed: false
       }
     ]
  };

  handleChange = (id) => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo
        }),
      }
    })
  };

  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  updateTodo = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      }),
    })
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <TodoInput addTodoProps={this.addTodo} />
          <TodosList todos={this.state.todos}
                     handleChangeProps={this.handleChange}
                     deleteTodoProps={this.delTodo}
                     updateTodoProps={this.updateTodo} />
        </div>
      </div>
    )
  }
}
export default TodoContainer
