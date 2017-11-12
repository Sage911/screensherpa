import React, { Component } from 'react'
import MovieCredits from 'containers/MovieCredits'
import TVCredits from 'containers/TVCredits'

class ActorMedia extends Component {
  state = {
    mediaSelected: 'movies'
  }

  selectMovies = (e) => {
    e.preventDefault()
    this.setState(({
      mediaSelected: 'movies'
    }))
  }

  selectTV = (e) => {
    e.preventDefault()
    this.setState(({
      mediaSelected: 'tv shows'
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.selectMovies}>Movies</button>
        <button onClick={this.selectTV}>TV Shows</button>
        {this.state.mediaSelected === 'movies' ?
          <MovieCredits id={this.props.id} /> :
          <TVCredits id={this.props.id} />
        }
      </div>
    )
  }
}

export default ActorMedia