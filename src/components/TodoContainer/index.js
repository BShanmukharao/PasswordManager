import {Component} from 'react'
import './index.css'
import EachTodoItem from '../EachTodoItem'

class TodoContainer extends Component {
  state = {userInput: '', userEnteredData: [], count: 1}

  readUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  readFormData = event => {
    event.preventDefault()
    const {userInput, userEnteredData, count} = this.state
    if (userInput !== '') {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }))
      const eachObject = {userInput, count, isChecked: false}
      userEnteredData.push(eachObject)
      this.setState({userInput: ''})
    } else {
      alert('please Enter Input')
    }
  }

  checkedItem = todoId => {
    const {userEnteredData} = this.state
    this.setState(prevState => ({
      userEnteredData: prevState.userEnteredData.map(eachItem => {
        if (eachItem.count === todoId) {
          return {...eachItem, isChecked: !eachItem.isChecked}
        }
        return eachItem
      }),
    }))
  }

  deleteTodoItem = todoId => {
    const {userEnteredData} = this.state
    const filterData = userEnteredData.filter(
      eachItem => eachItem.count !== todoId,
    )
    this.setState({userEnteredData: filterData})
  }

  render() {
    const {userInput, userEnteredData} = this.state
    return (
      <div className="todoBgContainer">
        <h1 className="todoHeading">Todo Application</h1>
        <form className="inputAndButtonContainer" onSubmit={this.readFormData}>
          <input
            type="text"
            className="inputField"
            onChange={this.readUserInput}
            value={userInput}
          />
          <button type="submit" className="addButtonItem">
            Add Todo
          </button>
        </form>
        <ul className="ulList">
          {userEnteredData.map(eachTodoItem => (
            <EachTodoItem
              todoDetails={eachTodoItem}
              key={eachTodoItem.count}
              deleteTodoItem={this.deleteTodoItem}
              checkedItem={this.checkedItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoContainer
