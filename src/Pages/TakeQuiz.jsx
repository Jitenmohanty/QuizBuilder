import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Layout from "../Layout";
import ResultPage from "../Components/ResultPage";

const TakeQuiz = () => {
  const { id } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [correctCount, setCorrectCount] = useState(0); // Track correct answers


  const quiz = {
    title: "Sample Quiz",
    description: "This is a sample quiz.",
    questions: [
      {
        questionText: "What is JSX in React?",
        options: [
          "A JavaScript XML syntax",
          "A new HTML language",
          "A React plugin",
          "A server-side rendering tool",
        ],
        correctAnswer: "A JavaScript XML syntax",
      },
      {
        questionText:
          "Which hook is used to manage state in functional components?",
        options: ["useEffect", "useState", "useReducer", "useMemo"],
        correctAnswer: "useState",
      },
      {
        questionText: "What is the virtual DOM in React?",
        options: [
          "A virtual copy of the real DOM",
          "A real-time rendering of the DOM",
          "A new type of HTML element",
          "An external library",
        ],
        correctAnswer: "A virtual copy of the real DOM",
      },
      {
        questionText:
          "What method is used to pass data from a parent to a child component?",
        options: ["Props", "State", "Hooks", "Context"],
        correctAnswer: "Props",
      },
      {
        questionText:
          "Which lifecycle method is used for side effects in functional components?",
        options: ["useState", "useEffect", "componentDidMount", "useContext"],
        correctAnswer: "useEffect",
      },
      {
        questionText: "What is the purpose of the key prop in React?",
        options: [
          "To provide unique identification to list items",
          "To bind an element to an event",
          "To optimize performance",
          "To manage state",
        ],
        correctAnswer: "To provide unique identification to list items",
      },
      {
        questionText: "What is the significance of React fragments?",
        options: [
          "To group elements without adding extra nodes to the DOM",
          "To import React libraries",
          "To handle asynchronous data",
          "To manage component lifecycle",
        ],
        correctAnswer:
          "To group elements without adding extra nodes to the DOM",
      },
      {
        questionText:
          "Which hook is used for performance optimization in React?",
        options: ["useMemo", "useState", "useEffect", "useContext"],
        correctAnswer: "useMemo",
      },
      {
        questionText: "How do you lift state up in React?",
        options: [
          "Move state from a child to a parent component",
          "Use useState in a child component",
          "Pass state as a prop to a child component",
          "Use Context API",
        ],
        correctAnswer: "Move state from a child to a parent component",
      },
      {
        questionText: "What is the use of the React context API?",
        options: [
          "To share data globally across components",
          "To manage component lifecycle",
          "To create component styles",
          "To optimize React performance",
        ],
        correctAnswer: "To share data globally across components",
      },
    ],
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

  // Navigate to the next question
  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      checkCorrectAnswers(); // Check answers when the quiz ends
    }
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

          <div className="p-4 bg-white shadow-md rounded-md">
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
              onClick={handlePrevious}
              className="bg-gray-600 text-white py-2 px-4 rounded-md disabled:opacity-50"
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>

            <button
              onClick={handleNext}
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