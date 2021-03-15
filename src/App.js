import React, { Component } from 'react';
import Searchbar from './components/Searchbar';

import { fetchImages } from './services/pixabayApi';

class App extends Component {
  state = { images: [], query: '' };

  componentDidMount() {
    fetchImages().then(images => this.setState({ images: images }));
  }

  handleSubmit = newQuery => this.setState({ query: newQuery });

  render() {
    return (
      <div>
        <Searchbar handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
