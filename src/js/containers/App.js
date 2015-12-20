import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import Counter from '../components/Counter'
import * as CounterActions from '../actions/counter'
import * as TodosActions from '../actions/todos'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import ObjectSearch from '../components/ObjectSearch'

class App extends Component {

   componentDidMount(){
      const { dispatch } = this.props
      console.log('componentDidMount', this.props);
      dispatch(TodosActions.fetchTestData(
        {
          id: 666,
          firstName: 'Fred',
          lastName: 'Flintstone'
        }
      ))
   }

  render() {
    console.log('APP - render : ', this.state, this.props);
    const { todos, todosActions } = this.props;

    //const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
    return (
      <div>
        <Counter counter={this.props.counter} {...this.props.counterActions}/>
        <Header addTodo={todosActions.addTodoServer} />
        <MainSection todos={todos} actions={todosActions} />
        <ObjectSearch />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    todos: state.todos,
  }
}

function mapDispatchToProps(dispatch) {
   let combined_actions = Object.assign({}, CounterActions, TodosActions);

   console.log('APP - mapDispatchToProps : ', combined_actions);

   //return { counterAction: bindActionCreators(combined_actions, dispatch) }
   return {
      counterActions: bindActionCreators(CounterActions, dispatch),
      todosActions:  bindActionCreators(TodosActions, dispatch),
      dispatch: dispatch
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
