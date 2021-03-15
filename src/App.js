import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';

import { fetchImages } from './services/pixabayApi';

class App extends Component {
  state = { images: [], query: '', page: 1 };

  componentDidMount() {
    // fetchImages(this.state.query, this.state.page).then(images =>
    //   this.setState({ images: images }),
    // );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.getImages();
    }
  }

  handleSubmit = newQuery => {
    this.setState({ images: [], query: newQuery, page: 1 });
  };

  getImages = () => {
    fetchImages(this.state.query, this.state.page, 5).then(images =>
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
      })),
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
        <Button onLoadMore={this.getImages} />
      </div>
    );
  }
}

export default App;
