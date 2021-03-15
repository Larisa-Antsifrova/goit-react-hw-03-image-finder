import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';

import { fetchImages } from './services/pixabayApi';

class App extends Component {
  state = { images: [], query: '', page: 1 };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.getImages();
    }
  }

  handleSubmit = newQuery => {
    this.setState({ images: [], query: newQuery, page: 1 });
  };

  getImages = () => {
    const { query, page } = this.state;

    const options = {
      query,
      page,
      perPage: 3,
    };

    fetchImages(options).then(images =>
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
      })),
    );
  };

  render() {
    const { images } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery>
          {this.state.images.map(image => (
            <ImageGalleryItem key={image.id} image={image} />
          ))}
        </ImageGallery>
        {images.length > 0 && <Button onLoadMore={this.getImages} />}
      </div>
    );
  }
}

export default App;
