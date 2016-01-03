import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import Counter from '../components/Counter'
import * as WheelActions from '../actions/aWheel'
import { connect } from 'react-redux'
import WheelBox from '../components/wheel/wheel-box'

class Wheel extends Component {

  constructor(props, context) {
    super(props, context)
    console.log('Wheel : constructor', props)
  }

   componentDidMount(){
      const { dispatch } = this.props
      console.log('Test:componentDidMount', this.props);
      dispatch(WheelActions.getWheel(
        {
          request: 'ww-api',
          method: 'feGetWheel'
        }
      ))
   }

  render() {
    console.log('Wheel - render : st-%o pr-%o', this.state, this.props);

    return (
      <div>
        <WheelBox />
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('current state (mapStateToProps) : ', state);
  return {
    wheel: state.wheel
  }
}

function mapDispatchToProps(dispatch) {
return {
      WheelActions: bindActionCreators(WheelActions, dispatch),
      dispatch: dispatch
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wheel)
