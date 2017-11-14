// container for /movie/:id

import React, { Component } from 'react'
import axios from 'axios'

import Movie from 'components/movie/Movie'

const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org/3'

class MovieContainer extends Component {
  state = {
    id: this.props.match.params.id,
    isLoading: true,
    config: JSON.parse(localStorage.getItem('images')),
    details: {},
    credits: {},
    videos: {},
    similar: {}
  }

  componentDidMount() {
    this.getInfo()
  }

  getInfo = async () => {
    const details = await axios.get(`${API_URL}/movie/${this.state.id}?api_key=${API_KEY}&language=en-US`)
    const credits = await axios.get(`${API_URL}/movie/${this.state.id}/credits?api_key=${API_KEY}`)
    const videos = await axios.get(`${API_URL}/movie/${this.state.id}/videos?api_key=${API_KEY}&language=en-US`)
    const similar = await axios.get(`${API_URL}/movie/${this.state.id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
    this.setState(({
      details: details.data,
      credits: credits.data,
      videos: videos.data,
      similar: similar.data,
      isLoading: false
    }))
  }

  render() {
    if (this.state.loading) {
      return <h1>loading!</h1>
    }
    return <Movie {...this.state} />
  }
}

export default MovieContainer