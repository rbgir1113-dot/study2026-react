import React, { Component } from 'react';

class InfiniteLoop extends Component {

  state = {
    users: []
  }

  componentDidMount = () => {
  
    const getUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const datas = await response.json()
      console.log("리랜더링! 😎")
      return datas
    }

    getUsers()
      .then((datas) => this.setState({users: datas}))
  }

  render() {
    const { users } = this.state
    return (
      <div>
        {users.map((user, i) => (
          <p key={i}>{user.name}</p>
        ))}
      </div>
    );
  }
}

export default InfiniteLoop;