import React, { Component, PropTypes } from 'react'

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)

  }

  render() {
     console.log('main section : ', this.props);
     let todos = this.props.todos.map(todo => (<li key={todo.id}>{todo.text}</li>) )
    return (
      <section className="main">
         <ul className="todo-list">
            {todos}
         </ul>
      </section>
    )
  }
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
