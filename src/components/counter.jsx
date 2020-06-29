import React, { Component } from 'react'

class Counter extends Component {
  state = {
    counter: 0,
    tags: ['tag1', 'tag2','tag3'],
    imageUrl: 'https://picsum.photos/200'
  }

  formatCounter() {
    const { counter } = this.state
    return counter === 0 ? 'Zero' : counter
  }

  // Ctrl + Alt + R --> Refactor Code
  getCounterClassName() {
    let badgeClass = 'badge m-2 '
    badgeClass += this.state.counter === 0 ? 'badge-warning' : 'badge-primary'
    return badgeClass
  }

  myStyle = {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5
  }

  render() {    

    return (  
      <div>
        {/* <img src={this.state.imageUrl} style={this.myStyle} alt="" /> */}
        <span className={this.getCounterClassName()}>{this.formatCounter()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>        
    )
  }
}

export default Counter