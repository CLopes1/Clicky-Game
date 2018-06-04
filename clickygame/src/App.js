import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer'
import images from './images.json';

console.log('images', images);
// React Law #43: You pass things from component to component using props
// React Law #85: Use curly braces to "inject" javascript (even in properties)

class App extends Component {

  state = {
    clicked: [],
    images,
  }

  handleImageClick = (id) => {
    console.log('id', id);

    this.shuffleImages();

    // TODO: check if id has been clicked (handle win/lose)

    // TODO: update score

  }

  shuffleImages = () => {

    let a = this.state.images;

    console.log("this.state.images is equal to" + a)

    // shuffle
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }

    this.setState({ images: a });

  }

  render() {
    return (
      <div className="App">
        <Nav />

        <Header />

    
          <Main images={this.state.images} onImageClick={this.handleImageClick} />


        <Footer />
      </div>
    );
  }
}

export default App;