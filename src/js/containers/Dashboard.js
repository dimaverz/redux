import React, { Component, PropTypes } from 'react'

class Dashboard extends Component {
  constructor(props, context) {
    super(props, context)
  }

  componentWillUnmount() {
    //console.log('Dashboard :: componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState){
    //console.log('should you : ', this.props, nextProps);
    return true;
  }

  render() {

    return (
      <div className="Image main-Dashboard">
        Dashboard
      </div>
    )
  }
}

export default Dashboard
