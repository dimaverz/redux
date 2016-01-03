import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { connect } from 'react-redux'



class App extends Component {

  constructor(props, context) {
    super(props, context)
    console.log('App : constructor',props)
  }

   componentDidMount(){
      const { dispatch } = this.props
      console.log('App : componentDidMount', this.props);
   }

  render() {
    console.log('APP - render : ', this.state, this.props);

    return (
      <div>
         <Link to="/branch">go to wheel</Link>
         <span> | </span>
         <Link to="/">go home</Link>
         <ReactCSSTransitionGroup
           component="div"
           transitionName="example"
           transitionEnterTimeout={500}
           transitionLeaveTimeout={500}
         >
           {React.cloneElement(this.props.children, {
             key: this.props.location.pathname
           })}
         </ReactCSSTransitionGroup>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {

   return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
