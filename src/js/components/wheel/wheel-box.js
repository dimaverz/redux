import React, { Component, PropTypes } from 'react'

class WheelBox extends Component {
  constructor(props, context) {
    super(props, context)
    console.log('WheelBox : constructor')    
  }

  render() {
    console.log('wheel : ', this.props);

    return (
      <div className="main-wheel">
        wheel
      </div>
    )
  }
}

export default WheelBox
