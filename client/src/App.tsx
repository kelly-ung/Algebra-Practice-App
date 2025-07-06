import { useState, useEffect } from "react";
import axios from "axios";
import { confetti } from "@tsparticles/confetti"; 

import Header from "./components/Header";
import LivesDisplay from "./components/LivesDisplay";
import EquationDisplay from "./components/EquationDisplay";
import AnswerForm from "./components/AnswerForm";
import ResultMessage from "./components/ResultMessage";
import NextButton from "./components/NextButton";
import SolutionDisplay from "./components/SolutionDisplay";
import ResultsButton from "./components/ResultsButton";
import Summary from "./components/Summary";
import KeepPracticingButton from "./components/KeepPracticingButton";
import ProgressBar from "./components/ProgressBar";

import bgImage from "./assets/background.svg";
import githubLogo from "./assets/github-mark.svg";
import successSound from "./assets/success-sound.mp3";
import errorSound from "./assets/error-sound.mp3";

type Equation = {
  a: number | null;
  b: number | null;
  c: number | null;
  x: number | null;
  operation: string;
  variable: string;
};

function App() {
  const [equation, setEquation] = useState<Equation>({
    a: null,
    b: null,
    c: null,
    x: null,
    operation: "",
    variable: "",
  });
  const [userAnswer, setUserAnswer] = useState<number | null>(null);
  const [result, setResult] = useState<boolean | null>(null);
  const [wrongCount, setWrongCount] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [showSummary, setShowSummary] = useState<boolean>(false);
  const [questionResults, setQuestionResults] = useState<(boolean | null)[]>([null, null, null, null, null]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  // Fetch a new equation from the server
  const fetchEquation = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/equation`);
      // Reset state for new equation
      setWrongCount(0);
      setUserAnswer(null);
      setResult(null);
      setShowSummary(false);
      
      // Update equation state with fetched data
      setEquation({
        a: response.data.a,
        b: response.data.b,
        c: response.data.c,
        x: response.data.x,
        operation: response.data.operation,
        variable: response.data.variable,
      });

      setLoading(false);
      setError(false);
    } catch (error) {
      console.error("Error fetching equation:", error);
      setError(true);
    }
  };

  // Fetch the first equation when the component mounts
  useEffect(() => {
    fetchEquation();
  }, []);

  // Play effects based on the result of the user's answer
  const playEffect = (sound: string) => {
    // If the result is correct
    if (sound === "success") {
      // Play success sound
      const audio = new Audio(successSound);
      audio.play();

      // Trigger confetti effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      // Disable pointer events on the confetti wrapper to allow clicks on other elements
      setTimeout(() => {
        const confettiWrapper = document.getElementById("confetti");
        if (confettiWrapper) {
          confettiWrapper.style.pointerEvents = "none"; 
        }
      }, 300);
    }

    // If the result is incorrect
    if (sound === "error") {
      // Play error sound
      const audio = new Audio(errorSound);
      audio.play();
    }
  }

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // If the user's answer is incorrect
    if (userAnswer !== equation.x) {
      if (wrongCount + 1 === 3) { // If user has answered incorrectly 3 times then move on
        setQuestionCount(questionCount + 1);
        setQuestionResults((prevResults) => {
          const newResults = [...prevResults];
          newResults[questionCount] = false; // Store the result for this question
          return newResults;
        });
      }
      setResult(false);
      setWrongCount(wrongCount + 1);
      playEffect("error");
    } 
    // If the user's answer is correct
    else { 
      setResult(true);
      setCorrectCount(correctCount + 1);
      setQuestionCount(questionCount + 1);
      setQuestionResults((prevResults) => {
        const newResults = [...prevResults];
        newResults[questionCount] = true; // Store the result for this question
        return newResults;
      });
      playEffect("success");
    }
  };

  // Handle click for Results button
  const handleResultsClick = () => {
    setShowSummary(true);
  };

  // Handle click for Keep Practicing button
  const handleKeepPracticingClick = () => {
    // Reset states 
    setCorrectCount(0);
    setQuestionCount(0);
    setQuestionResults([null, null, null, null, null]);
    // Start a new practice session
    fetchEquation();
  };

  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="flex flex-col min-h-[90vh]">
        <Header />

        {/* Display error if equation cannot be fetched */}
        {error && (
          <div className="flex justify-center items-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
              Error! Unable to load equation. Please try again later.
            </div>
          </div>
        )}

        <div className="flex flex-col items-center text-center">
          {!loading && (
            <div className="border-10 border-bee-yellow rounded-lg bg-[rgba(255,255,255,0.8)] 
                p-3 sm:p-6 md:p-8 lg:p-12 
                px-6 sm:px-12 md:px-32 lg:px-64 
                mb-12 sm:mb-16 md:mb-20 lg:mb-24">
              
              {showSummary ? (
                <>
                  {/* Show summary of the number of questions answered correctly */}
                  <Summary correctCount={correctCount} />
                  <KeepPracticingButton onClick={handleKeepPracticingClick} />
                </>
              ) : (
                <>
                  <ProgressBar questionResults={questionResults} />
                  
                  {/* Each question has 3 attempts */}
                  <LivesDisplay wrongCount={wrongCount} />
              
                  <EquationDisplay
                    a={equation.a}
                    b={equation.b}
                    c={equation.c}
                    operation={equation.operation}
                    variable={equation.variable}
                  />

                  {(result || wrongCount === 3) ? (
                    <p className="text-3xl">x = {equation.x}</p>
                  ) : (
                    <AnswerForm
                      userAnswer={userAnswer}
                      setUserAnswer={setUserAnswer}
                      setResult={setResult}
                      handleSubmit={handleSubmit}
                    />
                  )}

                  {/* Show message of whether answer is correct or incorrect */}
                  <ResultMessage result={result} wrongCount={wrongCount} />

                  {/* Show Next button if user has answered a question incorrectly 3 times or answered correctly */}
                  <NextButton show={(wrongCount === 3 || result === true) && questionCount !== 5 } onClick={fetchEquation} />
                  
                  {/* Show Results button if user has completed 5 questions */}
                  <ResultsButton show={questionCount === 5} onClick={handleResultsClick}/>
                  
                  {/* Show solution if user has answered incorrectly 3 times */}
                  <SolutionDisplay 
                    show={wrongCount === 3} 
                    a={equation.a}
                    b={equation.b}
                    c={equation.c}
                    x={equation.x}
                    operation={equation.operation}
                    variable={equation.variable}
                  />
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <footer className="flex flex-col justify-center items-center pb-8">
        <p className="text-bee-brown text-sm">Created by Kelly Ung</p>
        <div className="flex flex-row mt-2 gap-3">
          <a href="https://github.com/kelly-ung/Algebra-Practice-App" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110 hover:opacity-80">
            <img src={githubLogo} alt="GitHub Logo" className="w-8" />
          </a>
          <a href="mailto:kellyung@myyahoo.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110 hover:opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;