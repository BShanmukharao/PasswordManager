import {MdDelete} from 'react-icons/md'
import './index.css'

const EachTodoItem = props => {
  const {todoDetails, deleteTodoItem, checkedItem} = props
  const {userInput, count, isChecked} = todoDetails
  const todoId = 'todo'.concat(count.toString())

  const addDecorator = isChecked ? 'CssDecorator' : ''

  const deleteTodo = () => {
    deleteTodoItem(count)
  }

  const readCheckedItem = () => {
    checkedItem(count)
  }

  return (
    <li className="eachListContainer">
      <div className="checkBoxAndName">
        <input
          type="checkbox"
          className="eachCheckBox"
          id={todoId}
          onClick={readCheckedItem}
        />
        <label htmlFor={todoId} className={`eachTodoItem ${addDecorator}`}>
          {userInput}
        </label>
      </div>
      <div className="buttonContainer">
        <MdDelete className="deleteButton" onClick={deleteTodo} />
      </div>
    </li>
  )
}

export default EachTodoItem
