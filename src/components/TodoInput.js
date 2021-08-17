import React from 'react';

class TodoInput extends React.Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title)
      this.setState({
        title: "",
      })
    } else {
      alert("Cannot add empty item")
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               placeholder="Add Todo..."
               value={this.state.title}
               name="title"
               onChange={this.onChange} />
        <button>Submit</button>
      </form>
    )
  }
}

export default TodoInput
