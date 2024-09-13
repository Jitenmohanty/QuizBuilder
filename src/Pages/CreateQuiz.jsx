import { useState } from "react";
import Layout from "../Layout";
import { useNavigate } from "react-router-dom";
const CreateQuiz = ({ setQuizes }) => {
  // const [questions, setQuestions] = useState([
  //   { questionText: "", options: ["", "", "", ""], correctAnswer: "" },
  // ]);

  const [quiz, setQuiz] = useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate();

  // const handleAddQuestion = () => {
  //   setQuestions([
  //     ...questions,
  //     { questionText: "", options: ["", "", "", ""], correctAnswer: "" },
  //   ]);
  // };

  // const handleQuestionChange = (index, field, value) => {
  //   const newQuestions = [...questions];
  //   newQuestions[index][field] = value;
  //   setQuestions(newQuestions);
  // };

  const handleQuizCreation = (e) => {
            e.preventDefault();
            setQuizes(quiz);
            setQuiz((prev)=>({
              ...prev,
              title:"",
              description:""
            }))
            navigate("/")
          }

  return (
    <Layout>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Create a New Quiz
      </h2>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quiz Title
          </label>
          <input
            name="title"
            value={quiz.title}
            onChange={(e) =>
              setQuiz({ ...quiz, [e.target.name]: e.target.value })
            }
            type="text"
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter quiz title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quiz Description
          </label>
          <textarea
            name="description"
            value={quiz.description}
            onChange={(e) =>
              setQuiz({ ...quiz, [e.target.name]: e.target.value })
            }
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter quiz description"
          />
        </div>
            {/* This functionality was not properly ready but we definetly do it better  */}
        {/* <div>
          <h3 className="text-lg font-medium text-gray-900">Questions</h3>
          {questions.map((question, index) => (
            <div
              key={index}
              className="p-4 border border-gray-300 rounded-md shadow-sm mb-4"
            >
              <input
                type="text"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder={`Question ${index + 1}`}
                value={question.questionText}
                onChange={(e) =>
                  handleQuestionChange(index, "questionText", e.target.value)
                }
              />
              <div className="mt-2">
                {question.options.map((option, optIndex) => (
                  <input
                    key={optIndex}
                    type="text"
                    className="block w-full border-gray-300 mt-1 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder={`Option ${optIndex + 1}`}
                    value={question.options[optIndex]}
                    onChange={(e) =>
                      handleQuestionChange(
                        index,
                        `options.${optIndex}`,
                        e.target.value
                      )
                    }
                  />
                ))}
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddQuestion}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Add Question
          </button>
        </div> */}

        <button
          onClick={handleQuizCreation}
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Create Quiz
        </button>
      </form>
    </Layout>
  );
};

export default CreateQuiz;
