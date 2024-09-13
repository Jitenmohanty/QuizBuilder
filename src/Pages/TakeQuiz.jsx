import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../Layout";
import ResultPage from "../Components/ResultPage";
import {react} from '../Quizes'
import {js} from '../Quizes'

const TakeQuiz = () => {
  const { id } = useParams();
  const [quiz,setQuiz] = useState(id == 1 ?react:js);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [correctCount, setCorrectCount] = useState(0); // Track correct answers
  const [time,setTime] = useState(60);

  // Navigate to the next question
  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      checkCorrectAnswers(); // Check answers when the quiz ends
    }
  };

  useEffect(()=>{
    let timmer;
      if(time>0){
         timmer = setInterval(()=>{
          setTime((prev)=> prev-1)
        },1000)
      }
      else{
        handleNext();
        setTime(60)
      }
      return ()=> clearTimeout(timmer)
  },[time,handleNext])
   

  // Format time in minutes and seconds
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

   // Function to handle user's selected answer
   const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
  };

  // Function to check the number of correct answers
  const checkCorrectAnswers = () => {
    let count = 0;
    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        count++;
      }
    });
    setCorrectCount(count); // Store the correct answer count
    setIsQuizFinished(true); // Mark quiz as finished
  };



  // Navigate to the previous question
  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <Layout>
      {isQuizFinished ? (
        // Show ResultPage when quiz is finished
        <ResultPage correctCount={correctCount} totalQuestions={quiz.questions.length} />
      ) : (
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {quiz.title}
          </h2>
          <p className="text-lg text-gray-600 mb-6">{quiz.description}</p>

          <div className="p-4 bg-white shadow-md rounded-md relative">
            <span className="bg-gray-600 text-[#32f8a2] px-2  absolute top-1 font-bold right-2 border-2 border-gray-400 rounded-lg">{formatTime(time)}</span>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {quiz.questions[currentQuestionIndex].questionText}
            </h3>
            <div className="space-y-4">
              {quiz.questions[currentQuestionIndex].options.map((option, index) => (
                <label key={index} className="block">
                  <input
                    type="radio"
                    name={`question-${currentQuestionIndex}`}
                    className="mr-2"
                    checked={answers[currentQuestionIndex] === option}
                    onClick={() => handleAnswer(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-between">
            <button
             onClick={()=>{
              handlePrevious();
              setTime(60)
            }}
              className="bg-gray-600 text-white py-2 px-4 rounded-md disabled:opacity-50"
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>

            <button
              onClick={()=>{
                handleNext();
                setTime(60)
              }}
              className="bg-indigo-600 text-white py-2 px-4 rounded-md"
            >
              {currentQuestionIndex < quiz.questions.length - 1 ? "Next" : "Finish"}
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default TakeQuiz;