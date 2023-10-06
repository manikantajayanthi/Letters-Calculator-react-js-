import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeSearch = event => {
    const {value} = event.target

    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="bg-container">
        <div className="count-container">
          <h1 className="main-heading">Calculate the Letters you enter</h1>
          <label className="description" htmlFor="phraseText">
            Enter the phrase
          </label>
          <input
            className="input-box"
            type="text"
            id="phraseText"
            placeholder="Enter the phrase"
            onChange={this.onChangeSearch}
            value={searchInput}
          />
          <div className="letter-count-box">
            <p>No.of letters: {searchInput.length}</p>
          </div>
        </div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt=" letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
