import React, { Component, PropTypes } from 'react'
import InputText from './InputText'

class Form extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || 'roma'
    }
  }

   handleBlur(e){
     //console.log('handleBlur');
   }

   handleChange(e){
     this.setState({ text: e.target.value })
   }

   handleSubmit(e) {
      const text = e.target.value.trim()
      if (e.which === 13) {
         this.props.onSave(text)
         if (this.props.newTodo) {
           this.setState({ text: '' })
         }
         console.log('submit : ', text);
      }
   }


   render(){
      return (
         <div>
            <InputText
               autoFocus="true"
               value={this.state.text}
               onBlur={this.handleBlur()}
               onChange={this.handleChange.bind(this)}
               onKeyDown={this.handleSubmit.bind(this)} />
         </div>
      )
   }
}

export default Form
