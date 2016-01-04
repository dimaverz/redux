import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import * as BranchActions from '../actions/aBranch'
import { connect } from 'react-redux'

class Branch extends Component {
  constructor(props, context) {
    super(props, context)
  }

  shouldComponentUpdate(nextProps, nextState){

    //console.log('Branch - should : ', this.props, nextProps, nextState);
    return true;
  }

  componentWillReceiveProps(nextProps){
    console.log('Branch new props : ', this.props, nextProps);
  }

  componentDidMount(){
     const { dispatch } = this.props
     dispatch(BranchActions.getBranch(
       {
           tag: 'ww',
           module: 'branch',
           action: 'get-list',
           filter: {
              bid: 1
           }
       }
     ))
  }

  render() {

    return (
      <div className="Image main-branch">
        branch
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('Branch(mapStateToProps) : ', state);
  return {
    branch: state.branch
  }
}

function mapDispatchToProps(dispatch) {

   return {
     BranchActions: bindActionCreators(BranchActions, dispatch),
     dispatch: dispatch
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Branch)
