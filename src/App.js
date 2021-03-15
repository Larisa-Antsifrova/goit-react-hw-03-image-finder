import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';

import { fetchImages } from './services/pixabayApi';

class App extends Component {
  state = { images: [], page: 1 };

  componentDidMount() {
    // fetchImages(this.state.query, this.state.page).then(images =>
    //   this.setState({ images: images }),
    // );
  }

  componentDidUpdate() {
    // fetchImages(this.state.query, this.state.page).then(images =>
    //   this.setState({ images: images }),
    // );
  }

  handleSubmit = newQuery => {
    // this.setState({ query: newQuery })
    fetchImages(newQuery, this.state.page, 5).then(images =>
      this.setState({ images }),
    );
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery>
          {this.state.images.map(image => (
            <ImageGalleryItem key={image.id} image={image} />
          ))}
        </ImageGallery>
        <Button />
      </div>
    );
  }
}

export default App;
