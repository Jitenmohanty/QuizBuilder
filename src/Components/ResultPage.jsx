import { Link } from 'react-router-dom';
import Layout from '../Layout';

const ResultPage = ({ correctCount, totalQuestions }) => {

  return (
    <Layout>
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Quiz Completed!</h2>
        <h2 className="text-2xl font-semibold text-gray-900">Quiz Results</h2>
      <p className="text-lg text-gray-700 mt-4">
        You got {correctCount} out of {totalQuestions} questions correct!
      </p>
      <Link to="/" className="mt-6 inline-block bg-indigo-600 text-white py-2 px-4 rounded-md">
        Go to Home
      </Link>
      </div>
    </Layout>
  );
};

export default ResultPage;
