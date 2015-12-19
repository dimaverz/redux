import React, { Component, PropTypes } from 'react'

class InputText extends Component {
  constructor(props, context) {
    super(props, context)
  }

   render(){
      return (
            <input
               className="text-input"
               type="text"
               autoFocus={this.props.autoFocus}
               value={this.props.value}
               onBlur={this.props.onBlur}
               onChange={this.props.onChange}
               onKeyDown={this.props.onKeyDown} />
      )
   }
}

export default InputText
