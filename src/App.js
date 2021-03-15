import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';

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
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery>
          {this.state.images.map(image => (
            <ImageGalleryItem key={image.id} image={image} />
          ))}
        </ImageGallery>
      </div>
    );
  }
}

export default App;
