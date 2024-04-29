import {Component} from 'react'
import './index.css'
import EachItem from '../EachItem'

const Data = [
  {
    id: 10001,
    name: 'Emily BMWYDY',
    age: 23,
    city: 'San Antonio',
    purchaseDate: 'TX',
    amount: '$144.87',
  },
  {
    id: 10002,
    name: 'James CVOOYJ',
    age: 58,
    city: 'Dallas',
    purchaseDate: 'TX',
    amount: '$294.16',
  },
  {
    id: 10003,
    name: 'David FPISJR',
    age: 23,
    city: 'San Antonio',
    purchaseDate: 'TX',
    amount: '$70.14',
  },
  {
    id: 10004,
    name: 'Isabella VROUYV',
    age: 36,
    city: 'San Diego',
    purchaseDate: 'CA',
    amount: '$186.86',
  },
  {
    id: 10005,
    name: 'Emily QQIDVM',
    age: 48,
    city: 'Chicago',
    purchaseDate: 'IL',
    amount: '$94.22',
  },
  {
    id: 10006,
    name: 'Emma CXOMHG',
    age: 28,
    city: 'Chicago',
    purchaseDate: 'IL',
    amount: '$83.72',
  },
  {
    id: 10007,
    name: 'Alice KKDYOY',
    age: 58,
    city: 'Los Angeles',
    purchaseDate: 'CA',
    amount: '$154.32',
  },
  {
    id: 10008,
    name: 'David KPGWZK',
    age: 47,
    city: 'San Antonio',
    purchaseDate: 'TX',
    amount: '$154.34',
  },
  {
    id: 10009,
    name: 'Charlie AOQLHS',
    age: 48,
    city: 'San Jose',
    purchaseDate: 'CA',
    amount: '$200.74',
  },
  {
    id: 10011,
    name: 'Bob QHFMGN',
    age: 21,
    city: 'Chicago',
    purchaseDate: 'IL',
    amount: '$274.38',
  },
  {
    id: 10012,
    name: 'Emma YLPEIU',
    age: 49,
    city: 'Phoenix',
    purchaseDate: 'AZ',
    amount: '$16.19',
  },
  {
    id: 10013,
    name: 'David GOCZTL',
    age: 43,
    city: 'Los Angeles',
    purchaseDate: 'CA',
    amount: '$148.91',
  },
  {
    id: 10014,
    name: 'Isabella PYIOLG',
    age: 27,
    city: 'Houston',
    purchaseDate: 'TX',
    amount: '$92.07',
  },
  {
    id: 10014,
    name: 'Isabella PYIOLG',
    age: 27,
    city: 'Houston',
    purchaseDate: 'TX',
    amount: '$92.07',
  },
  {
    id: 10015,
    name: 'Fiona QNEHRA',
    age: 22,
    city: 'Houston',
    purchaseDate: 'TX',
    amount: '$15.16',
  },
  {
    id: 10016,
    name: 'Bob LINTAB',
    age: 54,
    city: 'San Jose',
    purchaseDate: 'CA',
    amount: '$160.14',
  },
  {
    id: 10017,
    name: 'Fiona CMMSGZ',
    age: 73,
    city: 'New York City',
    purchaseDate: 'NY',
    amount: '$272.12',
  },
  {
    id: 10018,
    name: 'Charlie BDLWPC',
    age: 54,
    city: 'Houston',
    purchaseDate: 'TX',
    amount: '$22.87',
  },
  {
    id: 10019,
    name: 'James TMMDJE',
    age: 60,
    city: 'Los Angeles',
    purchaseDate: 'CA',
    amount: '$118.73',
  },
  {
    id: 10020,
    name: 'Bob QDDNPH',
    age: 27,
    city: 'Houston',
    purchaseDate: 'TX',
    amount: '$295.96',
  },
  {
    id: 10021,
    name: 'Isabella BRIAEC',
    age: 38,
    city: 'Phoenix',
    purchaseDate: 'AZ',
    amount: '$215.74',
  },
  {
    id: 10022,
    name: 'James UYMWWS',
    age: 74,
    city: 'San Antonio',
    purchaseDate: 'TX',
    amount: '$82.19',
  },
  {
    id: 10024,
    name: 'David ZTXMJC',
    age: 72,
    city: 'Dallas',
    purchaseDate: 'TX',
    amount: '$93.94',
  },
  {
    id: 10025,
    name: 'Charlie MDDTER',
    age: 34,
    city: 'San Jose',
    purchaseDate: 'CA',
    amount: '$203.74',
  },
  {
    id: 10026,
    name: 'Bob TYDQWW',
    age: 21,
    city: 'New York City',
    purchaseDate: 'NY',
    amount: '$80.32',
  },
  {
    id: 10027,
    name: 'Henry NNVRML',
    age: 25,
    city: 'Dallas',
    purchaseDate: 'TX',
    amount: '$117.04',
  },
  {
    id: 10028,
    name: 'Fiona NDSIXV',
    age: 18,
    city: 'Philadelphia',
    purchaseDate: 'PA',
    amount: '$49.64',
  },
  {
    id: 10029,
    name: 'Fiona THRAAR',
    age: 44,
    city: 'Houston',
    purchaseDate: 'TX',
    amount: '$156.92',
  },
  {
    id: 10030,
    name: 'Fiona XGHIAV',
    age: 69,
    city: 'Philadelphia',
    purchaseDate: 'PA',
    amount: '$216.06',
  },
  {
    id: 10031,
    name: 'Charlie FEOWKR',
    age: 64,
    city: 'New York City',
    purchaseDate: 'NY',
    amount: '$116.31',
  },
]

class SearchPage extends Component {
  state = {userSearchInput: '', userData: []}

  readInputData = event => {
    this.setState({userSearchInput: event.target.value})
    const {userSearchInput} = this.state

    const filteredData = Data.filter(user =>
      user.name.toLowerCase().includes(userSearchInput.toLowerCase()),
    )
    this.setState({userData: filteredData})
  }

  readFormData = event => {
    event.preventDefault()
  }

  render() {
    const {userData} = this.state
    return (
      <div className="SearchPageContainer">
        <h1 className="mainHeading">Search Application</h1>
        <form onSubmit={this.readFormData}>
          <input
            type="search"
            className="searchInputItem"
            placeholder="Search query"
            onChange={this.readInputData}
          />
          <br />
          <button type="submit" className="searchButton">
            Search Result
          </button>
        </form>
        <ul className="unList">
          {userData.map(eachItem => (
            <EachItem key={eachItem.id} eachItem={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default SearchPage
