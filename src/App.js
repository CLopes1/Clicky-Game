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
      currentScore: 0,
      topScore: 0,
      message: 'Click an image to begin',
      images
    };



  handleImageClick = (id) => {
    console.log('id', id);
    this.shuffleImages();

    //each time you click an image, push that id's image to the clicked array. 
    this.state.clicked.push(id)

    console.log(this.state.clicked)

    

    // TODO: check if id has been clicked (handle win/lose)

    // TODO: update score

  } 





  shuffleImages = () => {

    let a = this.state.images;

    // console.log("this.state.images is equal to" + a)

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
        <Nav 
         currentScore={this.state.currentScore}
         topScore={this.state.topScore}
         message={this.state.message}
        />

        <Header />
        <Main 
          images={this.state.images} 
          onImageClick={this.handleImageClick} 
          handleIncrement={this.handleIncrement}
        />
        <Footer />
      </div>
    );
  }
}

export default App;