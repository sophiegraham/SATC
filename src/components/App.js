import React, { Component }  from 'react';
import { Question, Options } from './Quiz';

export default class App extends Component {
  state = {
    question: '',
    options: ['']
  };

  render(){
    const { question, options } = this.state;
    return (
      <>
        <h1>Sex and the City Quiz</h1>
        < Question
          question={question}
        />
        <Options
          options={options}
        />
      </>
    );
  }
}
