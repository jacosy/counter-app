import React, { Component } from 'react'
import Counter from './counter'


class Counters extends Component {
  state = {
    counters: [{
      id: 1, value: 3
    },{
      id: 2, value: 0
    },{
      id: 3, value: 1
    },{
      id: 4, value: 2
    }]
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({counters})
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {      
      c.value = 0
      return c
    });
    this.setState({counters})
  }

  handleIncrement = (counter) => {
    const { counters } = this.state
    const index = counters.indexOf(counter)
    counters[index].value += 1
    this.setState({counters})
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>Reset</button>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement} />
        ))}
      </div>
    )
  }
}

export default Counters