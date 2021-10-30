import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadQuestions } from '../../store/apiActions';
import { selectQuestions } from '../../store/selectors';


import QuestionDetails from './QuestionDetails.jsx';
import AddQuestion from './AddQuestion.jsx';
import Button from '../styles/Button.styled.js';



const Questions = () => {

  const dispatch = useDispatch();

  useEffect(() => dispatch(loadQuestions()), []);

  const [searchTerm, setSearchTerm] = useState('');
  const [isQuestionListExpanded, setIsQuestionListExpanded] = useState(false);


  const questions = useSelector(selectQuestions(searchTerm));

  // console.log('Search term', searchTerm)
  // console.log('Questions', questions)



  const expandQuestions = () => {
    if (isQuestionListExpanded === true) {
      setIsQuestionListExpanded(false);
    } else {
      setIsQuestionListExpanded(true);
    }
  }

  const renderContent = () => {

    if (!isQuestionListExpanded) {
      return (
        <div>
          {questions[0] ? <QuestionDetails question={questions[0]} /> : ''} <hr />
          {questions[1] ? <QuestionDetails question={questions[1]} /> : ''}  <hr />
        </div>
      )
    } else {
      return (
        <div>
          {questions.map(question => {
            return (
              <div key={question.question_id}>
                <QuestionDetails question={question} /> <hr />
              </div>
            )
          })}
        </div>
      )
    }
  }

//rendering first two questions

//need to refactor again, clicking More Questions only load additional two questions

  return (

    <div>
      <h3>QUESTIONS & ANSWERS</h3>
      {/* <p>{JSON.stringify(questions)}</p> */}
      <input
        style={{
          width: '90%',
          height: '50px',
          marginLeft: '1rem',
          display: 'flex',
          flexWrap: 'wrap',
          fontSize: '1rem'
        }}
        type="text"
        value={searchTerm}
        placeholder='Have a question? Search for answers...'
        onChange={e => setSearchTerm(e.target.value)}
      >
      </input>
      <br />
      <div>
        {renderContent()}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '4rem',
        }}
      >
        <Button onClick={expandQuestions}>
          {isQuestionListExpanded ? 'Collapse Questions' : 'More Questions'}
        </Button>

        <AddQuestion />
      </div>

    </div >

  );
};


export default Questions;