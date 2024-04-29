import './index.css'

const EachItem = props => {
  const {eachItem} = props
  const {name, city, age, purchaseDate, amount} = eachItem
  return (
    <li className="listItem">
      <h1 className="EachName">{name}</h1>
      <p>{city}</p>
      <p>{age}</p>
      <p>{purchaseDate}</p>
      <p>{amount}</p>
    </li>
  )
}

export default EachItem
