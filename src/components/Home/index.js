// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {login: false}

  onclick = () => {
    this.setState(preState => ({login: !preState.login}))
  }

  render() {
    const {login} = this.state

    return (
      <div className="container">
        <Message login={login} />
        {login ? (
          <Logout logout={this.onclick} />
        ) : (
          <Login login={this.onclick} />
        )}
      </div>
    )
  }
}
export default Home
