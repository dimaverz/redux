import React, { PropTypes, Component } from 'react'
import Form from './Form'

class Header extends Component {

   handleHeaderClick(obj){
      console.log('Header : handleHeaderClick %o', obj);
      localStorage.setItem('storage-event-test', 'testing event - click');
      this.props.addTodo(obj);
   }

   handleSave(text){
      if (text.length !== 0) {
         this.props.addTodo({text: text, id: 0})
      }
   }

   render() {
      console.log('Header : render', this.props)
      let new_value = 'new val yo'
      let newTodo = 1
      return (
      <header className="header">
          <h1
            onClick={this.handleHeaderClick.bind(this, new_value)}>todos
          </h1>
          <Form onSave={this.handleSave.bind(this)} newTodo={newTodo} />
      </header>
      )
   }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
