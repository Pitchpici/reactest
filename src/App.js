
import React, { Component } from 'react';
import characters from './characters.json';
import Wrapper from './components/Wrapper';
import CharacterCard from './components/characterCard';
import { Jumbotron , Button } from 'reactstrap';
import './App.css';





class App extends Component {
  state = {
    currentScore: 0,
    bestScore: 0,
    message: "Click an image to begin.",
    characters: characters,
    unselectedCharacters: characters
  };

  mixtiles = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
};


handleButtonClick = event => {
  event.preventDefault();
  this.setState({
    currentScore: 0,
    bestScore: 0,
    message: "Click an image to begin.",
    allCharacters: characters,
    unselectedCharacters: characters
  });
};



 selectCharacter = selectedName => {
  //Using array.find function to find the first element in unselectedCharacters array that sattisfies the condition
  //if no character matched then findCharacter will equals to undefined
  const findCharacter = this.state.unselectedCharacters.find(char => char.name === selectedName);

console.log(findCharacter);

  if (findCharacter === undefined) { 
    this.setState({
        message: "You guessed incorrectly!",
        bestScore: (this.state.currentScore > this.state.bestScore) ? this.state.currentScore : this.state.bestScore,
        currentScore: 0,
        allCharacters: characters,
        unselectedCharacters: characters
       
    });
}

else {
  const newUnselectedCharacters = this.state.unselectedCharacters.filter(char => char.name !== selectedName);
  this.setState({
      message: "You guessed correctly!",
      currentScore: this.state.currentScore + 1,
      allCharacters: characters,
      unselectedCharacters: newUnselectedCharacters
  });
};
//End
this.mixtiles(characters);
  };//End


  render() {
    return (
      <div>           
        <div className="App">
            <Jumbotron>
                <h2 className="App-title">CLICKY GAME</h2>
                <p className="message">+++++++++++++++++++++++++++++++</p>
                <p className="message">{this.state.message}</p>
                <p className="message">+++++++++++++++++++++++++++++++</p>
                <p className="message">Current Score: {this.state.currentScore}</p>
                <p className="message">Top Score: {this.state.bestScore}</p>
                <Button color="danger" onClick={this.handleButtonClick}> Start Over </Button>
            </Jumbotron>
        </div>
        <Wrapper>
            {
              //map function iterates thru characters array and displays individual image
              //and pass to characterCard with key, character, charImage, currentScore and function selectCharacter 
              this.state.characters.map(character => (
                  <CharacterCard 
                      key={character.id}
                      name = {character.name}
                      image = {character.image}
                      currentScore = {this.state.currentScore}
                      selectCharacter = {this.selectCharacter}
                  />
              ))
            }
      </Wrapper>
      </div>
    );
  };
};



export default App;
