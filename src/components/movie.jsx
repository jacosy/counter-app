import React, { Component } from 'react'
import { getMovies, deleteMovie } from '../services/fakeMovieService'


class Movie extends Component {
  state = {
    movies: getMovies()
  }

  deleteHandler = (id) => {
    deleteMovie(id)  
    this.setState({movies: getMovies()})
  }

  renderMovies = () => {
    return this.state.movies.map(m => {
      return (
        <tr key={m._id}>
          <td>{m.title}</td>
          <td>{m.genre.name}</td>
          <td>{m.numberInStock}</td>
          <td>{m.dailyRentalRate}</td>
          <td><button onClick={() => this.deleteHandler(m._id)} className="btn btn-danger btn-lg">Delete</button></td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <p>Showing {this.state.movies.length} movies in the DB</p>
        <table>
          <thead>
            <tr>          
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderMovies()}
          </tbody>          
        </table>
      </div>
    )
  }
}

export default Movie