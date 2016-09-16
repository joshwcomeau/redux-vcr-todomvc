import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'

class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header className="header">
          <h1>todos</h1>
          <TodoTextInput newTodo
                         value={this.props.textInput}
                         onWrite={this.props.writeTodoText}
                         onSave={this.handleSave.bind(this)}
                         placeholder="What needs to be done?" />
      </header>
    )
  }
}

Header.propTypes = {
  textInput: PropTypes.string.isRequired,
  writeTodoText: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
}

export default Header
