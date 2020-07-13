import React, { Component } from 'react'

class Counter extends Component {
  state = {
    tags: ['tag1', 'tag2','tag3'],
    imageUrl: 'https://picsum.photos/200'
  }

  formatCounter() {
    const { value } = this.props.counter
    return value === 0 ? 'Zero' : value
  }

  // Ctrl + Alt + R --> Refactor Code
  getCounterClassName() {
    let badgeClass = 'badge m-2 '
    badgeClass += this.props.counter.value === 0 ? 'badge-warning' : 'badge-primary'
    return badgeClass
  }

  myStyle = {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5
  }

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no Tags!</p>
    } else {
      return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }
  }

  render() {
    return (  
      <div>
        {/* {this.props.children} */}
        {/* <img src={this.state.imageUrl} style={this.myStyle} alt="" /> */}
        <span className={this.getCounterClassName()}>{this.formatCounter()}</span>
        <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
        <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
        {/* {this.renderTags()} */}
      </div>        
    )
  }  
}

export default Counter