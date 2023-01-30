// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {clickedStatus: false}

  onClickButton = () => {
    this.setState(prevState => ({clickedStatus: !prevState.clickedStatus}))
  }

  getButtonText = () => {
    const {clickedStatus} = this.state

    return clickedStatus ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="bgContainer">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.onClickButton}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
