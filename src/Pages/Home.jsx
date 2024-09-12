import { Link } from 'react-router-dom';
import Layout from '../Layout';

const Home = () => {
  const quizzes = [
    { id: 1, title: 'React Basics', description: 'Test your React knowledge' },
    { id: 2, title: 'JavaScript Fundamentals', description: 'Check your JS basics' },
    // Add more quizzes as needed
  ];

  return (
    <Layout>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">Online Quiz Platform</h1>
        <p className="text-lg text-gray-500 mt-2">Choose a quiz or create your own!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-gray-900">{quiz.title}</h3>
            <p className="text-gray-600 mt-2">{quiz.description}</p>
            <Link to={`/take-quiz/${quiz.id}`} className="mt-4 inline-block bg-indigo-600 text-white py-2 px-4 rounded-md">
              Take Quiz
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link to="/create-quiz" className="bg-blue-600 text-white py-2 px-4 rounded-md">
          Create New Quiz
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
