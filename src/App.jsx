import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CreateQuiz from './Pages/CreateQuiz';
import TakeQuiz from './Pages/TakeQuiz';
import ResultPage from './Components/ResultPage';
import Navbar from './Components/Navbar';
import { useState } from 'react';

const App = () => {

  const [quizzes,setQuizes] = useState([
      { id: 1, title: 'React Basics', description: 'Test your React knowledge' },
      { id: 2, title: 'JavaScript Fundamentals', description: 'Check your JS basics' },
  ])

  const handleAddNewQuiz = (quiz)=>{
    setQuizes(prev => [...prev,{id:quizzes.length+1,...quiz}])
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home quizzes={quizzes}/>} />
          <Route path="/create-quiz" element={<CreateQuiz setQuizes={handleAddNewQuiz} />} />
          <Route path="/take-quiz/:id" element={<TakeQuiz />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
