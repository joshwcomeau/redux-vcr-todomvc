import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

import { Replay } from 'redux-vcr';

class App extends Component {
  render() {
    const { todos, textInput, visibilityFilter, actions } = this.props

    return (
      <div>
        <Header
          addTodo={actions.addTodo}
          writeTodoText={actions.writeTodoText}
          textInput={textInput}
        />
        <MainSection
          todos={todos}
          visibilityFilter={visibilityFilter}
          actions={actions}
        />
        <Replay />
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    textInput: state.textInput,
    visibilityFilter: state.visibilityFilter,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
