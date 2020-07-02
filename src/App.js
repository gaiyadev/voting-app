import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import TopVote from './components/Header/TopVote';
import axios from 'axios';

const baseURL = 'https://voting-app-31eb5.firebaseio.com';
let maxVotes;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        {
          name: "Php",
          votes: 0
        },
        {
          name: "Python",
          votes: 0
        },
        {
          name: "Go",
          votes: 0
        },
        {
          name: "Java",
          votes: 0
        }
      ],
      highestVote: 0,
      loading: false
    }
  }

  voteHandler(i) {
    let newLanguages = [...this.state.languages];
    newLanguages[i].votes++;
    // function swap(array, i, j) {
    //   var temp = array[i];
    //   array[i] = array[j];
    //   array[j] = temp;
    // }
    this.setState({
      languages: newLanguages,
      highestVote: this.maxVotes
    });
    //API call to save to firebase
    const votesCount = {
      languagesVote: this.state.languages,
      highestVote: maxVotes + 1
    };
    axios.put(baseURL + '/votes.json', votesCount).then((response) => {
    }).catch(err => console.log(err));
    //Calling the higest vote func
    this.highestVote();
  }
  // componentDidMount() {
  //   setTimeout(() => {
  //     axios.get(baseURL + '/votes.json')
  //       .then(response => {
  //         console.log(response);
  //         this.setState({
  //           languages: response.data,
  //           highestVote: response.highestVote
  //         });
  //       }).catch(err => {
  //         console.log(err);
  //       });
  //   }, 300);
  // }

  highestVote = () => {
    const arrLang = [...this.state.languages];
    const php = arrLang[0].name;
    const phpVotes = arrLang[0].votes;

    const python = arrLang[1].name;
    const pythonVotes = arrLang[1].votes;

    const go = arrLang[2].name;
    const goVotes = arrLang[2].votes;

    const java = arrLang[3].name;
    const javaVotes = arrLang[3].votes;

    maxVotes = Math.max(phpVotes, pythonVotes, goVotes, javaVotes);
    this.setState({
      highestVote: maxVotes,
    });

    // console.log(maxVotes);
    // console.log("pphp" + php, phpVotes);
    // console.log("python" + python, pythonVotes);
    // console.log("go" + go, goVotes);
    // console.log("java" + java, javaVotes);
  }

  render() {
    return (
      <div className="App">
        <div>
          <TopVote className="topVote">{this.state.highestVote}</TopVote>
          <div className="row">
            <Header />
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
      </div>
    );
  }

}

export default App;
