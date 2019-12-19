import React from 'react';
import './App.css';
import ImgCard from './components/ImgCard';
import InfoBar from './components/InfoBar'

class App extends React.Component {

  state = {
    shuffled: [],
    clicked: [],
    topScore: 0,
    score: 0,
    message: "Click on each crab only once to earn points!"
  }

  //displays shuffled images on initial load
  componentDidMount = () => {
    this.shuffle();
  }

  //records image clicked
  handleClick = () => {

    console.log("click");
  }

  //shuffles images
  shuffle = () => {
    const images = ["blue-crab.jpg",
      "caribbean-hermit-crab.jpg",
      "coconut-crab.jpg",
      "dungeness-crab.jpg",
      "fiddler-crab.jpg",
      "ghost-crab.jpg",
      "green-crab.jpg",
      "halloween-crab.jpg",
      "japanese-spider-crab.jpg",
      "red-claw-crab.jpg",
      "stone-crab.jpg",
      "strawberry-hermit-crab.jpg"];
    const shuffled = [];

    while (shuffled.length < images.length) {
      let idx = Math.floor(Math.random() * 12);
      if (!shuffled.includes(images[idx])) {
        shuffled.push(images[idx]);
      };
    }

    this.setState({ shuffled: shuffled })

  }

  //renders images
  render() {
    return (
      <>
        <InfoBar
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <div className="container imgcontainer">
          <div className="row">
            {this.state.shuffled.map(img => (
              <ImgCard
                onClick={this.handleClick}
                key={img}
                src={img}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
};


export default App;
