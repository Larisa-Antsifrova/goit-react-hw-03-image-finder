import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';
import Loader from 'react-loader-spinner';

import { fetchImages } from './services/pixabayApi';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
  state = { images: [], query: '', page: 1, isLoading: false };

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

    this.setState({ isLoading: true });

    fetchImages(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(err => console.log(err.message))
      .finally(() => this.setState({ isLoading: false }));
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
        {this.state.isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {images.length > 0 && <Button onLoadMore={this.getImages} />}
      </div>
    );
  }
}

export default App;
