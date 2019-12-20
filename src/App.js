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
  handleClick = (num) => {

    let clicked = this.state.clicked;
    let topScore = this.state.topScore;
    let score = this.state.score;
    let message = "";

    //Adds number to array
    if (!clicked.includes(num)) {
      score++;
      clicked = [...clicked, num]
      message = "Correct! Keep going!"

    } else {
      message = "Game over! Try again!";
      score = 0;
      clicked = [];
    };

    if (score > topScore) {
      topScore = score;
    }

    if (score === this.state.shuffled.length) {
      message = "Congratulations! All crabs clicked!"
    }

    this.setState({ clicked: clicked, score: score, topScore: topScore, message: message })
    this.shuffle();
  }

  //shuffles images
  shuffle = () => {
    const images = [{
      num: 0,
      url: "blue-crab.jpg"
    },
    {
      num: 1,
      url: "caribbean-hermit-crab.jpg"
    },
    {
      num: 2,
      url: "coconut-crab.jpg"
    },
    {
      num: 3,
      url: "dungeness-crab.jpg"
    },
    {
      num: 4,
      url: "fiddler-crab.jpg"
    },
    {
      num: 5,
      url: "ghost-crab.jpg"
    },
    {
      num: 6,
      url: "green-crab.jpg"
    },
    {
      num: 7,
      url: "halloween-crab.jpg"
    },
    {
      num: 8,
      url: "japanese-spider-crab.jpg"
    },
    {
      num: 9,
      url: "red-claw-crab.jpg"
    },
    {
      num: 10,
      url: "stone-crab.jpg"
    },
    {
      num: 11,
      url: "strawberry-hermit-crab.jpg"
    }];
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
            {this.state.shuffled.map((img) => (
              <ImgCard
                onClick={() => this.handleClick(img.num)}
                key={img.url}
                src={img.url}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
};


export default App;
