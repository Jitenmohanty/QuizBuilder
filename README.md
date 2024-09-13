# Quiz App

A React-based quiz platform that allows users to take interactive quizzes on various topics like React and JavaScript. The app features multiple-choice questions, keeps track of correct answers, and provides a result page at the end of the quiz.

## Features

- **Multiple Quizzes**: The app supports multiple quizzes, including topics like React and JavaScript.
- **Dynamic Quiz Rendering**: The questions and options are dynamically rendered based on the selected quiz.
- **Navigation**: Users can navigate between questions using "Previous" and "Next" buttons.
- **Answer Validation**: After completing the quiz, the app checks how many answers were correct and displays the results.
- **Result Page**: At the end of the quiz, users are shown their score (number of correct answers) out of the total number of questions.
- **Responsive Design**: The app is fully responsive, working well across different screen sizes.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling routing between different pages in the app.
- **Tailwind CSS**: For styling and making the app responsive.

## Getting Started

To run the app locally, follow these steps:

### Prerequisites

- Node.js and npm should be installed on your machine. You can download them from [Node.js](https://nodejs.org/).

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Jitenmohanty/QuizBuilder.git

cd quiz-app

npm install

npm start

src/
├── Components/
│   └── ResultPage.jsx       # Component to show the result page
    └── Navbar.jsx
├── Layout/
│   └── Layout.jsx           # Common layout for the app
├── Quizes/
│   └── react               # Questions related to React
│   └── js                  # Questions related to JavaScript
├── Pages/
│   └── TakeQuiz.jsx         # Main page for taking the quiz
    └── CreateQuiz.jsx        #  page for Creating the quiz
    └── Home.jsx 
├── App.js                  # Main application file
└── index.js                # Entry point of the application



