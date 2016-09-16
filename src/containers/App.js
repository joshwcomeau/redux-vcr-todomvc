import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import DevToolWrapper from '../HOCs/DevToolWrapper'
import * as TodoActions from '../actions'

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

const WrappedApp = DevToolWrapper(App)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedApp);
