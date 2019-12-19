import React from 'react';
import './App.css';
import ImgCard from './components/ImgCard';

class App extends React.Component {

  state = {
    shuffled: [],
    clicked: []
  }

  componentDidMount() {
    this.shuffle();
  }

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

  render() {
    return (
      <div className="container">
        {this.state.shuffled.map(img => (
          <ImgCard
            key={img}
            src={img}
          />
        ))}
      </div>
    );
  }
};


export default App;
