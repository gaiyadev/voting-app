import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Button from './components/Button/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "Go", votes: 0 },
        { name: "Java", votes: 0 }
      ]
    }
  }

  voteHandler(i) {
    let newLanguages = [...this.state.languages];
    newLanguages[i].votes++;
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.setState({ languages: newLanguages });

  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <Header></Header>
        </div>
        <div className="row">
          {
            this.state.languages.map((lang, i) =>
              <div key={i} className="language">
                <div className="voteCount">
                  {lang.votes}
                </div>
                <div className="languageName">
                  {lang.name}
                </div>
                <Button voteBtn={this.voteHandler.bind(this, i)}>Vote</Button>
              </div>
            )
          }
        </div>
      </div>
    );
  }

}

export default App;
